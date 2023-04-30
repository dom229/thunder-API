export const newdata = (info)=>info.map(element => {
    const {id,fullname,email,password,gender,dob} = element;
    const newobj = {id,fullname,email,password,gender,dob}
    return newobj;
});