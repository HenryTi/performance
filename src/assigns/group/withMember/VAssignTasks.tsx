import React from "react";
import { CAssignsWithMember } from "./CAssignsWithMember";
import { View, FA } from "tonva";
import { AssignTask } from "models";
import { stateText } from "tapp";
import { vStopFlag } from "assigns/VAssign";


// 注意：这里涉及到面向对象的基础知识。继承还是包含
// renderTasks 可以写到一个 VAssingWithMember 里面去
// 但是，到这里，VAssign的继承有两条线
// 一条线是：Draft，Doing，End
// 另外一条线是：Self, NoMember, WithMember
// 目前的继承，只能由一条线，目前选择了 Draft, Doing, End

// 于是，把renderTasks用单独的View，以控件的方式来实现。分别在Doing和End中使用
export class VAssignTasks extends View<CAssignsWithMember> {
	render() {
		return this.renderTasks()
	}

	protected renderTasks() {
		return <>
			{this.renderMy()}
			{this.renderSelf()}
			{this.renderOthers()}
		</>;
	}

	private renderSelf() {
		let {checks, rates} = this.controller.tasksToCategory;
		if (checks.length === 0 && rates.length === 0) return;
		return <div className="pt-3">
			{this.renderChecks(checks)}
			{this.renderRates(rates)}
		</div>;
	}

	private renderMy() {
		let {my} = this.controller.tasksToCategory;
		if (!my) return;
		let {state, end} = my;
		let action = this.controller.getTaskAction(state);
		if (!action) {
			let {me} = stateText(state);
			return <div className="px-3 py-2 bg-white border-top cursor-pointer d-flex align-items-center"
				onClick={() => this.controller.showFlowDetail(my)}>
				<span className="mr-2">我的任务</span>
				<span className="text-warning">{me}</span>
				{this.renderEndFlag(end)}
				<FA name="angle-right" className="ml-auto" />
			</div>;
		}
		return <div className="px-3 py-3 bg-white border-top cursor-pointer"
			onClick={this.controller.meAct}>
			<FA name="chevron-circle-right" className="text-danger mr-3" />
			<span className="text-primary ">{action}</span> 我的任务
		</div>;
	}

	private renderActions(actName:string, act:(task:AssignTask)=>void, tasks: AssignTask[]) {
		if (tasks.length === 0) return;
		return tasks.map((task, index) => {
			let {worker} = task;
			return <div key={index} className="px-3 py-3 bg-white border-bottom cursor-pointer d-flex align-items-center"
				onClick={()=>act(task)}>
				<FA name="chevron-circle-right" className="text-danger mr-3" />
				<span className="text-primary mr-2">{actName}</span>
				{this.renderUser(worker)}
			</div>
		});
	}
	
	private renderChecks(tasks: AssignTask[]) {
		let act = this.controller.showCheck;
		return this.renderActions('检查', act, tasks);
	}

	private renderRates(tasks: AssignTask[]) {
		let act = this.controller.showRate;
		return this.renderActions('评价', act, tasks);
	}

	private renderEndFlag(end:number) {
		if (end === 1) return <span className="mx-3">{vStopFlag}</span>;
	}

	private renderOthers() {
		let {
			starts,
			dones,
			passes,
			fails,
			rateds,
			cancels,
			// invalids
		} = this.controller.tasksToCategory;

		let arr = [...starts, ...dones, ...passes, ...fails, ...rateds, ...cancels];
		if (arr.length <= 0) return;
		return <div className="pt-3">
			{arr.map((v:AssignTask, index) => {
				let {id, end, state} = v;
				let {me} = stateText(state);
				return <div key={id} className="d-flex px-3 py-2 bg-white border-bottom cursor-pointer align-items-center"
					onClick={() => this.controller.showFlowDetail(v)}>
					{this.renderUser(v.worker)}
					<span className="ml-3 small text-info">任务{me}</span>
					{this.renderEndFlag(end)}
					<FA name="angle-right" className="ml-auto" />
				</div>
			})}
		</div>
	}
}
