import { HttpInterceptorFn } from '@angular/common/http';

export const apiRequestInterceptor: HttpInterceptorFn = (req, next) => {

  const token = localStorage.getItem("finder_token");
  const newReq = req.clone({
    setHeaders: {
      Authorization: `Bearer ${token}`
    }
  })
  return next(newReq);
};
