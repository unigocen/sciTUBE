import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MdIconRegistry } from '@angular/material';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: String = 'SciTUBE';

  constructor(mdIconRegistry: MdIconRegistry, sanitizer: DomSanitizer) {
    mdIconRegistry.addSvgIconSet('./assets/st.svg');
    mdIconRegistry.addSvgIcon('icon2', sanitizer.bypassSecurityTrustResourceUrl('assets/icon2.svg'));
  }
}
