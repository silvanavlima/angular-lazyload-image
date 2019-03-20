import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'default-image',
  styles: [
    `
      img {
        min-width: 1497px;
        width: 100%;
        min-height: 1127px;
      }

      img.ng-lazyloaded {
        animation: fadein 0.5s;
      }

      @keyframes fadein {
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }
    `
  ],
  template: `
    <img *ngFor="let image of images" [src]="image" />
    <br><br>
  `
})
export class HomeComponent {
  errorImage = 'https://i.imgur.com/XkU4Ajf.png';
  defaultImage = 'https://www.placecage.com/1000/1000';

  images = [
    'https://images.unsplash.com/photo-1467932760935-519284fc87fa?dpr=2&auto=compress,format&fit=crop&w=1199&h=800&q=80',
    'https://images.unsplash.com/photo-1468103933896-2c34a78104c2?dpr=2&auto=compress,format&fit=crop&w=1199&h=799&q=80',
    'https://images.unsplash.com/photo-1471201187657-6406da15e43b?dpr=2&auto=compress,format&fit=crop&w=1199&h=1199&q=80',
    'https://images.unsplash.com/photo-1483488792196-78bedff29c21?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
    'https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
    'https://images.unsplash.com/photo-1493406300581-484b937cdc41?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'

  ];
}

// import { Component, ChangeDetectionStrategy } from '@angular/core';

// @Component({
//   selector: 'default-image',
//   styles: [
//     `
//       img {
//         min-width: 1497px;
//         width: 100%;
//         min-height: 1127px;
//       }

//       img.ng-lazyloaded {
//         animation: fadein 0.5s;
//       }

//       @keyframes fadein {
//         from {
//           opacity: 0;
//         }
//         to {
//           opacity: 1;
//         }
//       }
//     `
//   ],
//   template: `
//     <img
//       *ngFor="let image of images"
//       [defaultImage]="defaultImage"
//       [errorImage]="errorImage"
//       [lazyLoad]="image"
//     />
//   `
// })
// export class HomeComponent {
//   errorImage = 'https://i.imgur.com/XkU4Ajf.png';
//   defaultImage = 'https://www.placecage.com/1000/1000';

//   images = [
//     'https://images.unsplash.com/photo-1467932760935-519284fc87fa?dpr=2&auto=compress,format&fit=crop&w=1199&h=800&q=80',
//     'https://images.unsplash.com/photo-1468103933896-2c34a78104c2?dpr=2&auto=compress,format&fit=crop&w=1199&h=799&q=80',
//     'https://images.unsplash.com/photo-1471201187657-6406da15e43b?dpr=2&auto=compress,format&fit=crop&w=1199&h=1199&q=80'
//   ];
// }
