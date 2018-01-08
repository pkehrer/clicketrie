import { Component, OnInit, ComponentFactoryResolver, ViewChild, Type } from '@angular/core'
import { PostDirective } from './post.directive'
import { ActivatedRoute } from '@angular/router'
import * as _ from 'lodash'
import { N001IntroductionComponent } from './posts/n001-introduction/n001-introduction.component'
import { N002DyeingComponent } from './posts/n002-dyeing/n002-dyeing.component';

interface Post {
  title: string
  description: string
  component: Type<{}>
  id: string
}

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  @ViewChild(PostDirective) postComponent: PostDirective;
  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private route: ActivatedRoute) { }

  posts: Post[] = [
    {
      title: 'Introduction',
      description: 'description',
      component: N001IntroductionComponent,
      id: 'intro'
    },
    {
      title: 'Dyeing',
      description: 'dyeing description',
      component: N002DyeingComponent,
      id: 'dyeing'
    }
  ]

  ngOnInit() {
    this.route.params.subscribe(params => {
      let post = _.find(this.posts, p => p.id === params['postid'])
      if (!post) {
        post = this.posts[0]
      }
      const factory = this.componentFactoryResolver.resolveComponentFactory(post.component)
      this.postComponent.viewContainerRef.createComponent(factory)
    })
  }

}
