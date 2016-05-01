/// <reference path="angular2.d.ts" />
/// <reference path="meteor/meteor.d.ts" />
/// <reference path="moment/moment.d.ts" />

declare module ngBootstrap {
    //components/common.ts
    import ControlValueAccessor = common.ControlValueAccessor;
    import OnInit = core.OnInit;
    import Self = core.Self;
    import NgModel = common.NgModel;
    import TemplateRef = core.TemplateRef;
    import OnDestroy = core.OnDestroy;
    import DoCheck = core.DoCheck;
    import Host = core.Host;
    import Renderer = core.Renderer;
    import ElementRef = core.ElementRef;
    import DynamicComponentLoader = core.DynamicComponentLoader;
    interface IAttribute {
        [name: string]: any;
    }
    //components/accordion/accordion.ts
    class Accordion {
        constructor();
        closeOtherGroups(openGroup:AccordionGroup): void;
        addGroup(group:AccordionGroup): void;
        removeGroup(group:AccordionGroup): void;
    }
    class AccordionGroup implements OnInit, OnDestroy {
        public set isOpen(value:boolean);
        public headingTemplate:TemplateRef;
        //OnInit
        ngOnInit();
        //OnDestroy
        ngOnDestroy();
        public toggleOpen(event:MouseEvent): void;
    }
    class AccordionHeading {
        constructor(private group:AccordionGroup, private templateRef:TemplateRef);
    }
    //components/alert/alert.ts
    class Alert implements OnInit {
        constructor(public el:ElementRef)
        //OnInit
        ngOnInit(): void;
        onClose(): void;
    }
    //components/buttons/button-checkbox.ts
    class ButtonCheckbox implements ControlValueAccessor, OnInit {
        constructor(@Self() public cd:NgModel);
        //OnInit
        ngOnInit(): void;
        //ControlValueAccessor
        writeValue(value:any): void;
        registerOnChange(fn:(_:any) => {}):void;
        registerOnTouched(fn:() => {}):void;
    }
    //components/buttons/button-radio.ts
    class ButtonRadio implements ControlValueAccessor, OnInit {
        constructor(@Self() public cd:NgModel, public el:ElementRef);
        //OnInit
        ngOnInit(): void;
        //ControlValueAccessor
        writeValue(value:any): void;
        registerOnChange(fn:(_:any) => {}):void;
        registerOnTouched(fn:() => {}):void;
    }
    //components/carousel/carousel.ts
    enum Direction {UNKNOWN, NEXT, PREV};
    class Carousel implements OnDestroy {
        constructor();
        //OnDestroy
        ngOnDestroy(): void;
        play(): void;
        pause(): void;
        addSlide(slide:Slide): void;
        removeSlide(slide:Slide): void;
    }
    class Slide implements OnInit, OnDestroy {
        constructor(private carousel:Carousel);
        //OnInit
        ngOnInit(): void;
        //OnDestroy
        ngOnDestroy(): void;
    }
    export const CAROUSEL_DIRECTIVES:Array<any> = [Carousel, Slide];
    export const carousel:Array<any> = [Carousel, Slide];
    //components/collapse/collapse.ts
    class Collapse {
        constructor();
        toggle(): void;
        hide(): void;
        show(): void;
    }
    const ACCORDION_DIRECTIVES:Array<any>
    const accordion:Array<any>
    //components/datepicker/datepicker.ts
    class DatePicker implements ControlValueAccessor {
        constructor(@Self() public cd:NgModel);
        //ControlValueAccessor
        writeValue(obj:any): void;
        registerOnChange(fn:(_:any) => {}): void;
        registerOnTouched(fn:() => {}): void;

    }
    //components/datepicker/datepicker-popup.ts
    class DatePickerPopup implements OnInit {
        constructor(@Self() public cd:NgModel, public element:ElementRef, public renderer:Renderer, public loader:DynamicComponentLoader);
        //OnInit
        ngOnInit(): void;
        hide(cb:Function): void;

    }
    export const DATEPICKER_DIRECTIVES:Array<any> = [DatePicker, DatePickerPopup];
    export const datepicker:Array<any> = [DatePicker, DatePickerPopup];
    //components/dropdown/dropdown.ts
    class Dropdown implements OnInit, OnDestroy {
        constructor(public el:ElementRef);
        //OnInit
        ngOnInit(): void;
        //OnDestroy
        ngOnDestroy(): void;
        toggle(open?:boolean):boolean;
    }
    //components/dropdown/dropdown-menu.ts
    class DropdownMenu implements OnInit {
        constructor(@Host() public dropdown:Dropdown, public el:ElementRef);
        //OnInit
        ngOnInit():void;
    }
    //components/dropdown/dropdown-toggle.ts
    class DropdownToggle implements OnInit {
        constructor(@Host() public dropdown:Dropdown, public el:ElementRef);
        //OnInit
        ngOnInit():void;
    }
    export const DROPDOWN_DIRECTIVES: Array<any> = [Dropdown, DropdownMenu, DropdownToggle];
    export const dropdown: Array<any> = [Dropdown, DropdownMenu, DropdownToggle];
    //components/pagination/pagination.ts
    interface IPaginationConfig extends IAttribute {
    }
    class Pagination implements ControlValueAccessor, OnInit, IPaginationConfig, IAttribute {
        constructor(@Self() public cd:NgModel, public renderer:Renderer, public elementRef:ElementRef);
        //OnInit
        ngOnInit(): void;
        //ControlValueAccessor
        writeValue(value:number): void;
        registerOnChange(fn:(_:any) => {}):void;
        registerOnTouched(fn:() => {}):void;
    }
    class Pager extends Pagination implements core.OnInit {
        constructor(@Self() cd:NgModel, renderer:Renderer, elementRef:ElementRef);
    }
    export const PAGINATION_DIRECTIVES:Array<any> = [Pagination, Pager];
    export const pagination:Array<any> = [Pagination, Pager];
    //components/progressbar/progressbar.ts
    class Progress implements OnInit {
        constructor();
        //OnInit
        ngOnInit(): void;
    }
    class Bar implements OnInit, OnDestroy {
        constructor(@Host() public progress:Progress);
        //OnInit
        ngOnInit(): void;
        //OnDestroy
        ngOnDestroy(); void;
    }
    class Progressbar {
        constructor();
    }
    export const PROGRESSBAR_DIRECTIVES:Array<any> = [Progress, Bar, Progressbar];
    export const progressbar:Array<any> = [Progress, Bar, Progressbar];
    //components/rating/rating.ts
    class Rating implements ControlValueAccessor, OnInit {
        constructor(@Self() public cd:NgModel);
        //OnInit
        ngOnInit(): void;
        //ControlValueAccessor
        writeValue(value:number): void;
        registerOnChange(fn:(_:any) => {}):void;
        registerOnTouched(fn:() => {}):void;
    }
    //components/tabs/tabs.ts
    class Tabset implements OnInit {
        constructor();
        //OnInit
        ngOnInit(): void;
    }
    class Tab implements OnInit, OnDestroy, DoCheck {
        constructor(public tabset:Tabset);
        //DoCheck
        ngDoCheck():boolean;
        //OnInit
        ngOnInit(): void;
        //OnDestroy
        ngOnDestroy(): void;
    }
    class TabHeading {
        constructor(public templateRef:TemplateRef, tab:Tab)
    }
    export const TAB_DIRECTIVES:Array<any> = [Tab, TabHeading, Tabset];
    export const tabs:Array<any> = [Tab, TabHeading, Tabset];
    //components/timepicker/timepicker.ts
    class Timepicker implements ControlValueAccessor, OnInit {
        constructor(@Self() public cd:NgModel);
        //OnInit
        ngOnInit():void;
        //ControlValueAccessor
        writeValue(v:any):void;
        registerOnChange(fn:(_:any) => {}):void;
        registerOnTouched(fn:() => {}):void;
    }
    //components/tooltip/tooltip.ts
    class TooltipOptions {
        constructor(options:Object);
    }
    class TooltipContainer {
        constructor(public element:ElementRef, options:TooltipOptions);
    }
    class Tooltip implements OnInit {
        onstructor(element:ElementRef, loader:DynamicComponentLoader);
        ngOnInit(): void;
    }
    export const TOOLTIP_DIRECTIVES:Array<any> = [Tooltip, TooltipContainer];
    export const tooltip:Array<any> = [Tooltip, TooltipContainer];
    //components/typeahead/typeahead.ts
    class Typeahead implements OnInit {
        constructor(cd:NgModel, element:ElementRef, renderer:Renderer, loader:DynamicComponentLoader);
        ngOnInit(): void;
    }
}

declare module "ng2-bootstrap" {
    export = ngBootstrap;
}
