import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BlogModule, BlogComponent } from './blog/blog.module';
import { AboutComponent } from './about/about.component';
import { LayoutBuilderComponent } from './layout-builder/layout-builder.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    LayoutBuilderComponent
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
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }