import React from 'react';
import { NoteItem } from "./NoteItem";
import { EnumTaskStep, EnumTaskState } from 'tapp';
import { FA } from 'tonva';

export class NoteTaskTodo extends NoteItem {
	taskId: number;
	caption: string;
	discription: string;
	time: Date;
	owner: number;
	x: number;
	step: EnumTaskStep;
	state: EnumTaskState;

	renderAsNote():JSX.Element {
		if (this.x === 1) {
			// removed
			return <div className="w-100 d-flex justify-content-center">
				<div className="bg-light py-1 px-3 small text-muted">撤销了 <del>{this.discription}</del></div>
			</div>
		}
		return this.renderInternal();
	}
	renderInView():JSX.Element {
		return this.renderInternal();
	}

	private onClick = () => {
		this.cGroup.cApp.showTask(this.taskId);
	}

	private renderInternal():JSX.Element {
		let text:string;
		switch (this.step) {
			default: text = '未知 ' + this.step; break;
			case EnumTaskStep.todo: text = '领办'; break;
			case EnumTaskStep.done: text = '已办'; break;
			case EnumTaskStep.check: text = '查验'; break;
			case EnumTaskStep.rate: text = '评价'; break;
		}
		return <div className="border rounded px-3 py-1 text-muted bg-light cursor-pointer"
			onClick={this.onClick}>
				<FA className="text-danger mr-1" name="chevron-circle-right" />
				<span className="text-success mr-3">{text}</span>
				<span className="text-dark mr-1">{this.caption}</span>
				<small className="">{this.discription}</small>
			</div>;
	}
}