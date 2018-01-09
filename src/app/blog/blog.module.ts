import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogComponent } from './blog.component';
import { N001IntroductionComponent } from './posts/n001-introduction/n001-introduction.component';
import { PostDirective } from './post.directive';
import { N002DyeingComponent } from './posts/n002-dyeing/n002-dyeing.component';
import { ImageRowComponent } from './image-row/image-row.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    BlogComponent,
    N001IntroductionComponent,
    PostDirective,
    N002DyeingComponent,
    ImageRowComponent
  ],
  exports: [BlogComponent],
  entryComponents: [
    N001IntroductionComponent,
    N002DyeingComponent
  ]
})
export class BlogModule { }
export { BlogComponent }
