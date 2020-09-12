import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

export function queryPaginated<Interface>(http: HttpClient, baseUrl: string, urlOfFilter?: string | object): Observable<Interface> {
  let params = new HttpParams();
  let url = baseUrl;

  if (typeof urlOfFilter === 'string') {
    url = urlOfFilter;
  } else if (typeof urlOfFilter === 'object') {
    Object.keys(urlOfFilter).sort().forEach(key => {
      const value = urlOfFilter[key];
      if (value !== null) {
        params = params.set(key, value.toString());
      }
    });
  }

  return http.get<Interface>(url, { params: params });

}
