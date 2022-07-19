export interface INewProcedure {
    date: string;
    nameProcedure: string;
    client: {
        id: number | null;
        name: string;
        telephone: string | null;
    };
}