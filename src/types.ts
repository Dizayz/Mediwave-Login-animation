enum LOG {
    LOGIN,
    SIGNUP,
    PASSWORD
}

interface DataChart {
    x: string[],
    Correct: number[],
    False: number[]
}
interface Module {
    nomModule: string;
    sousModules?: (string | Module[]);
}
export { LOG, type DataChart, type Module }