interface Person {
    name: string,
};

interface Student extends Person{
    age: number,
    city: string
};

interface BusinessPerson extends Student{
    car: string
};

interface PostGraduateStudent extends Student{
    projects: string[]
};

type StudentInfo<T extends Student = Student> ={
    data: T,
    grades: number[],
    internships?: string[]
};

// interface StudentInfo<T extends Student = Student> {
//     data: T,
//     grades: number[],
//     internships?: string[]
// };

type BusinessPersonInfo = {
    data: BusinessPerson,
    grades: number[],
    salary: number
};


export default function play (){

    function logStudentInfo(info: StudentInfo){
        console.log(info.data.name);
        console.log(info.data.age);
        console.log(info.data.city);
        console.log(info.grades);
        if(info.internships){
            console.log(info.internships);
        }
    };

    function logPostGraduateStudentInfo(info: StudentInfo<PostGraduateStudent>){
        
        console.log(info.data.name);
        console.log(info.data.age);
        console.log(info.data.city);
        console.log(info.data.projects);
        console.log(info.grades);
        if(info.internships){
            console.log(info.internships);
        }

    };
    
    function logBusinessPersonInfo(info: BusinessPersonInfo){
        console.log(info.data.name);
        console.log(info.data.age);
        console.log(info.data.city);
        console.log(info.data.car);
        console.log(info.grades);
        console.log(info.salary)
    };

    const studentInfo = {

        data: {
            name: 'harmony',
            age: 15,
            city: 'Cincinnati'
        },
        grades: [4, 4, 4, 4]

    };
    const student1Info = {

        data: {
            name: 'harmony2',
            age: 15,
            city: 'Cincinnati'
        },
        grades: [4, 4, 4, 4],
        internships: ['google', 'facebook']

    };
    
    const postGraduateStudent = {

        data: {
            name: 'janay',
            age: 15,
            city: 'Cincinnati',
            projects: ['Unlimited', 'Flowers over Stones', 'Phoenix']
        },
        grades: [4, 4, 4, 4],
        internships: ['google', 'facebook'],

    };

    const businessPersoninfo = {

        data: {
            name: 'fred',
            age: 34,
            city: 'Cincinnati',
            car: 'something nice'
        },
        grades: [4, 3.8, 3.9, 3.9],
        salary: 100000

    };

    logBusinessPersonInfo(businessPersoninfo);
    logStudentInfo(studentInfo);
    logStudentInfo(student1Info);
    logPostGraduateStudentInfo(postGraduateStudent);

};












