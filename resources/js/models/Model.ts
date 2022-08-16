import {ModelInterface} from "../types";

export default abstract class Model implements ModelInterface {
    created_at: Date | null;
    updated_at: Date | null;

    protected constructor(created_at?: string, updated_at?: string) {
        this.created_at = new Date(created_at)
        this.updated_at = new Date(updated_at)
    }
}
