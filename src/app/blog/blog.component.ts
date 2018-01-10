import { Component, OnInit, ComponentFactoryResolver, ViewChild, Type, ChangeDetectorRef } from '@angular/core'
import { PostDirective } from './post.directive'
import { ActivatedRoute } from '@angular/router'
import * as _ from 'lodash'
import { N001IntroductionComponent } from './posts/n001-introduction/n001-introduction.component'
import { N002DyeingComponent } from './posts/n002-dyeing/n002-dyeing.component';

declare var $: any
declare var window: any

interface Post {
  title: string
  description: string
  component: Type<{}>
  id: string
}

const posts: Post[] = [
  {
    title: 'Diving in!',
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

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  @ViewChild(PostDirective) postComponent: PostDirective;

  postsListMargin = 60
  postsListsScrolledMargin = 150

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private route: ActivatedRoute) {
  }

  posts = posts
  post: Post

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.post = _.find(this.posts, p => p.id === params['postid'])
      if (!this.post) {
        this.post = this.posts[0]
      }
      const factory = this.componentFactoryResolver.resolveComponentFactory(this.post.component)
      this.postComponent.viewContainerRef.createComponent(factory)
    })

    $().ready(() => {
      var postsList = $("#posts-list")
      const postListTop = postsList.offset().top
      $(window).scroll(() => {

        const scrollTop = $(window).scrollTop()
        let margin = scrollTop > postListTop - 50 ?
          scrollTop - postListTop + this.postsListsScrolledMargin :
          this.postsListMargin;


        postsList.stop()
          .animate({ "marginTop": margin + "px" }, 400)
      })
    })
  }

}
