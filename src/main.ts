import readline from 'readline';
import { fetchApi } from "../config/api/googleApi"
import { Job } from "./entity/Job";
import { FileUseCase } from './useCases/CreateAndWriteFileUseCase';

class Main {
    constructor(
        private fileUseCase: FileUseCase
    ) {}

    public async run() {
        const readL = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        })
        try {

            readL.question("Type your job title: ", async (role) => {

                const results = await fetchApi(role);
    
                if(results.length === 0) {
                    console.log("Any jobs found!");
                    readL.close();
                    return;
                }
    
                const jobs = results.map((result: Job) => {
                    return new Job(result.title, result.link);
                })
    
                await this.fileUseCase.createAndWrite(jobs, "jobs.txt");
                console.log("Jobs are in 'jobs.txt'");
                readL.close();
            })
        } catch (error) {
            console.log(error);
            readL.close()
        }
    }
}

const fileUseCase = new FileUseCase();
const main = new Main(fileUseCase);

main.run();
