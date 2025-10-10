import type { TaskModel } from "../../models/TaskModel"

export enum TaskActionsTypes {
    START_TASK = 'START_TASK',
    INTERRUPT_TASK = 'INTERRUPT_TASK',
    RESET_STATE = 'RESET_STATE',
    COUNT_DOWN = 'COUNT_DOWN',
    COMPLETE_TASK = 'COMPLETE_TASK',
}

export type TaskActionsWithPayLoad = | {
    type: TaskActionsTypes.START_TASK;
    payload: TaskModel;
} | {
    type: TaskActionsTypes.COUNT_DOWN;
    payload: {secondsRemaining: number};
} 

export type TaskActionsWithOutPayLoad = |  {
    type: TaskActionsTypes.RESET_STATE;
} | {
    type: TaskActionsTypes.INTERRUPT_TASK;
} | {
    type: TaskActionsTypes.COMPLETE_TASK;
}

export type TaskActionsModel = TaskActionsWithPayLoad | TaskActionsWithOutPayLoad