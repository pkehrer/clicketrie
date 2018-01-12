import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { FormsModule } from '@angular/forms'


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BlogModule, BlogComponent } from './blog/blog.module';
import { AboutComponent } from './about/about.component';
import { LayoutBuilderComponent } from './layout-builder/layout-builder.component';
import { ColorPickerModule } from 'ngx-color-picker';
import { BoardComponent } from './layout-builder/board/board.component';
import { ColorLayoutService } from './layout-builder/color-layout.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    LayoutBuilderComponent,
    BoardComponent
  ],
  imports: [
    BrowserModule,
    BlogModule,
    RouterModule.forRoot([
      {
        path: "",
        component: BlogComponent
      },
      {
        path: "posts/:postid",
        component: BlogComponent
      },
      {
        path: 'about',
        component: AboutComponent
      },
      {
        path: 'layouts',
        component: LayoutBuilderComponent
      }
    ]),
    ColorPickerModule,
    FormsModule
  ],
  providers: [ColorLayoutService],
  bootstrap: [AppComponent]
})
export class AppModule { }
