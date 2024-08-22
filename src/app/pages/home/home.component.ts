import { Component } from '@angular/core';
import {ContentComponent} from "../../components/content/content.component";
import {TitleComponent} from "../../components/title/title.component";
import {TimelineComponent} from "../../components/timeline/timeline.component";
import {TimelineEntryComponent} from "../../components/timeline/timeline-entry/timeline-entry.component";
import {CardComponent} from "../../components/card/card.component";
import {CardEntryComponent} from "../../components/card/card-entry/card-entry.component";
import {SocialButtonsComponent} from "../../components/social-buttons/social-buttons.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    ContentComponent,
    TitleComponent,
    TimelineComponent,
    TimelineEntryComponent,
    CardComponent,
    CardEntryComponent,
    SocialButtonsComponent
  ],
  templateUrl: './home.component.html',
})
export class HomeComponent {
  imagePath = '/roman.lysser.webp';
}
