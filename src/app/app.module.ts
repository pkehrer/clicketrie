import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BlogModule, BlogComponent } from './blog/blog.module';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    BlogModule,
    RouterModule.forRoot([
      {
        path: "",
        component: HomeComponent
      },
      {
        path: "blog",
        component: BlogComponent
      },
      {
        path: "blog/posts/:postid",
        component: BlogComponent
      },
      {
        path: 'about',
        component: AboutComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
