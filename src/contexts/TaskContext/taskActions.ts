import type { TaskModel } from "../../models/TaskModel"

export enum TaskActionsTypes {
    START_TASK = 'START_TASK',
    INTERRUPT_TASK = 'INTERRUPT_TASK',
    RESET_STATE = 'RESET_STATE',
}

export type TaskActionsWithPayLoad = {
    type: TaskActionsTypes.START_TASK;
    payload: TaskModel;
} 

export type TaskActionsWithOutPayLoad =  {
    type: TaskActionsTypes.RESET_STATE;
} | {
    type: TaskActionsTypes.INTERRUPT_TASK;
}

export type TaskActionsModel = TaskActionsWithPayLoad | TaskActionsWithOutPayLoad