class Student {
    constructor(r_no, name, course) {
        this.r_no = r_no;
        this.course = course;
        this.name = name;
    }

    getAadhaarNo(){
        return this.aadhaar_no;
    }

    setAadhaarNo(aadhaar_no){
        this.aadhaar_no = aadhaar_no;
    }
}

let s = new Student(1, "AMG", "Computer Science");
s.setAadhaarNo("1234-5678-9012");
console.log(s.getAadhaarNo());