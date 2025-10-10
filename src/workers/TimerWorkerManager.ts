let instance:  TimerWorkerManager | null = null

export class TimerWorkerManager {
    private worker: Worker;

        private constructor() {
                // O worker está no mesmo diretório (src/workers). Usar URL relativo ao arquivo
                // e informar { type: 'module' } para workers ES modules no Vite.
                this.worker = new Worker(new URL("./timerworker.js", import.meta.url), { type: 'module' });
        }

    static getInstance() {
        if(!instance) {
            instance = new TimerWorkerManager()
        }
        return instance
    }

    postMessage(message: any) {
        this.worker.postMessage(message)
    }

    onmessage(cb: (e: MessageEvent) => void) {
        this.worker.onmessage = cb
    }

    terminate() {
        this.worker.terminate()
        instance = null
    }
}