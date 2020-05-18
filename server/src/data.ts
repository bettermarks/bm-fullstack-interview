import moment from "moment";

const dateFormatter = "YYYY-MM-DD"

const today = () => 
    moment().format(dateFormatter)

const lastWeek = (): string => 
    moment().subtract(7, "days").format(dateFormatter)

type Activity = {
    date: string;
    title: string;
    book: string;
}

type StudentActivity = Activity & {
    successRate: string;
}

type Student = {
    username: string;
}

export const activity1: Activity = {
    date: today(),
    title: "Chapter1: Adding numbers",
    book: "Learning how to manipulate numbers with Betty"
}

export const activity2: Activity = {
    date: today(),
    title: "Chapter12: Fractions",
    book: "Learning how to manipulate fractions with Betty"
}

export const activity3: Activity = {
    date: lastWeek(),
    title: "Chapter7: Geometry",
    book: "Draw triangle, circles and other shapes"
}

export const activity4: Activity = {
    date: lastWeek(),
    title: "Chapter9: Multiplications",
    book: "Multiply natural numbers with drag and drop tools"
}

export const activity5: Activity = {
    date: today(),
    title: "Chapter1: Charts",
    book: "Interact with charts to learn proportions"
}

export const Frauke: Student = {
    username: "Frauke"
}

export const Oleg: Student = {
    username: "Oleg"
}

export const FraukeActivities: Array<StudentActivity> = [
    {...activity1, successRate: "87%"},
    {...activity2, successRate: "91%"},
    {...activity3, successRate: "96%"}
]

export const OlegActivities: Array<StudentActivity> = [
    {...activity3, successRate: "57%"},
    {...activity4, successRate: "59%"},
    {...activity5, successRate: "61%"},
]