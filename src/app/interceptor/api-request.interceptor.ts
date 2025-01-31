import { HttpInterceptorFn } from '@angular/common/http';

export const apiRequestInterceptor: HttpInterceptorFn = (req, next) => {

  const token = localStorage.getItem("finderToken");
  if (token) {
    const newReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    })
    return next(newReq);
  }else {
    return next(req);
  }
};
