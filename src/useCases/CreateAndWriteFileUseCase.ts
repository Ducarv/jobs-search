import fs from "fs/promises";
import { Job } from "../entity/Job";
import path from "path";

export class FileUseCase {
    constructor() {}

    public async createAndWrite(jobs: Job[], filename: string) {
        const jobsPath = path.join(__dirname, "../../jobs");

        await fs.mkdir(jobsPath, { recursive: true });

        const filePath = path.join(jobsPath, filename);

        const jobList = jobs.map(job => `${job.title}\n${job.link}\n`).join("\n");
        await fs.writeFile(filePath, jobList, "utf-8");
        
        console.log(`Jobs roles in ${filePath}`);
    }
}