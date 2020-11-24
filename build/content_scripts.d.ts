declare class PowerUp {
    private boardId;
    cardId: string;
    constructor();
    getBoardId(): void;
    getCardId(): void;
    getBoardMembers(): void;
    handleError(error: any, path: any): void;
}
declare const _default: PowerUp;
export default _default;
