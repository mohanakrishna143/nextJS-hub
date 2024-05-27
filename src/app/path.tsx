const paths = {
    signIn() {
      return '/';
    }, 
    signUp(){
        return '/signup';
    },
    homePage(){
      return '/employee'
    } ,
    employeeDetailsPage(){
      return '/employeedetails'
    },
    employeeDetailsPageById(id: any){
      return `/employeedetails/${id}`
    }
  };
  
  export default paths;