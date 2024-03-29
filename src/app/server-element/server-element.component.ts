import {
  Component,
  OnInit,
  Input,
  ViewEncapsulation,
  SimpleChanges,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  ViewChild,
  ElementRef,
  ContentChild,
} from "@angular/core";

@Component({
  selector: "app-server-element",
  templateUrl: "./server-element.component.html",
  styleUrls: ["./server-element.component.css"],
  encapsulation: ViewEncapsulation.Emulated, //None, Native
})
export class ServerElementComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy {
  @Input("srvElement")
  element!: { type: string; name: string; content: string; };
  @Input()
  name!: string;
  @ViewChild('heading', { static: true })
  header!: ElementRef;
  @ContentChild('contentParagraph', { static: true })
  paragraph!: ElementRef;

  constructor() {
    console.log("constructor called!");
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log("ngOnChanges called!");
    console.log(changes);
  }

  ngOnInit(): void {
    console.log("ngOnInit called!");
    console.log('Text Content' + this.header.nativeElement.textContent);
    console.log('Paragraph Content' + this.paragraph.nativeElement.textContent);
  }

  ngDoCheck() {
    console.log("ngDoCheck called!");
  }

  ngAfterContentInit() {
    console.log("ngAfterContentInit called!");
  }
  
  ngAfterContentChecked() {
    console.log("AfterContentChecked called!");
    console.log('Paragraph Content' + this.paragraph.nativeElement.textContent);

  }
  
  ngAfterViewInit() {
    console.log("AfterViewInit called!");
    console.log('Text Content' + this.header.nativeElement.textContent);
  }

  ngAfterViewChecked() {
    console.log("AfterViewChecked called!");
  }

  ngOnDestroy() {
    console.log("ngOnDestroy called!");
  }
}
