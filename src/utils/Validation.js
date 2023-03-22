



export const isVal = (formik) => {


  if (formik.errors.email && formik.touched.email) {
    return true;
  } else {
    return false;
  }


}


