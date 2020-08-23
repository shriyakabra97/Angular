import { Injectable } from '@angular/core';
import { Promotion } from '../shared/promotion';
import { PROMOTIONS } from '../shared/promotions';
import { resolve } from 'url';
import { DISHES } from '../shared/dishes';
import { of, Observable } from 'rxjs';
import { delay } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class PromotionService {

  constructor() { }

  // getPromotions() : Promise<Promotion[]> {
  //   return new Promise( resolve => {
  //     setTimeout(() => resolve(PROMOTIONS), 2000);
  //   });
  // }
  // getPromotion(id: string) : Promise<Promotion>{
  //   return new Promise(resolve=> {
  //     // Simulate server latency with 2 second delay
  //       setTimeout(() => resolve(PROMOTIONS.filter((promotion) => (promotion.id === id))[0]), 2000);
  //   });
  // }
  // getFeaturedPromotion() : Promise<Promotion>{
  //   return  new Promise(resolve=> {
  //     // Simulate server latency with 2 second delay
  //       setTimeout(() => resolve(PROMOTIONS.filter((promotion) => promotion.featured)[0]), 2000);
  //   });  
  // }


  getPromotions() : Observable<Promotion[]> {
    return of(PROMOTIONS).pipe(delay(2000));

  }
  getPromotion(id: string) : Observable<Promotion>{
    return of(PROMOTIONS.filter((promotion) => (promotion.id === id))[0]).pipe(delay(2000));
  }
  getFeaturedPromotion() : Observable<Promotion>{
    return of(PROMOTIONS.filter((promotion) => promotion.featured)[0]).pipe(delay(2000));
  }
}
