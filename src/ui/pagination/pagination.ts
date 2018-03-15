import { EventEmitter } from "event-emitter-lite";

export class Pagination {
    private page: number;
    private count: number;
    private visiblePages: number;
    private rowsPerPage: number;
    public onSelectPage = new EventEmitter<number>();
    constructor() {
        this.page = 1;
        this.count = 0;
        this.visiblePages = 3;
        this.rowsPerPage = 5;
    }
    private changePage(page: number) {
        page = Number(page);
        if (this.page !== page) {
            this.page = page;
            this.onSelectPage.emit(this.page);
        }
    }
    private detached() {
        this.onSelectPage.unsubscribeAll();
    }
}