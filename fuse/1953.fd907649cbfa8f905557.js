(self.webpackChunk_fuse_demo=self.webpackChunk_fuse_demo||[]).push([[1953],{1953:(e,t,n)=>{"use strict";n.r(t),n.d(t,{NotesModule:()=>Ze});var i=n(63423),o=n(51095),s=n(7539),c=n(22238),l=n(98295),r=n(76627),a=n(83166),u=n(33935),g=n(72458),p=n(23017),d=n(96557),f=n(3921),h=n(44466),m=n(37716);let x=(()=>{class e{constructor(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=m.Xpm({type:e,selectors:[["notes"]],decls:1,vars:0,template:function(e,t){1&e&&m._UZ(0,"router-outlet")},directives:[i.lC],encapsulation:2,changeDetection:0}),e})();var b=n(26215),Z=n(79765),v=n(90739),w=n(87519),k=n(88002),_=n(46782),y=n(54395),A=n(43190),T=n(25917),N=n(40205),I=n(93342),Q=n(15257),J=n(91074),q=n(91841);let C=(()=>{class e{constructor(e){this._httpClient=e,this._labels=new b.X(null),this._note=new b.X(null),this._notes=new b.X(null)}get labels$(){return this._labels.asObservable()}get notes$(){return this._notes.asObservable()}get note$(){return this._note.asObservable()}getLabels(){return this._httpClient.get("api/apps/notes/labels").pipe((0,I.b)(e=>{this._labels.next(e)}))}addLabel(e){return this._httpClient.post("api/apps/notes/labels",{title:e}).pipe((0,I.b)(e=>{this._labels.next(e)}))}updateLabel(e){return this._httpClient.patch("api/apps/notes/labels",{label:e}).pipe((0,I.b)(e=>{this.getNotes().subscribe(),this._labels.next(e)}))}deleteLabel(e){return this._httpClient.delete("api/apps/notes/labels",{params:{id:e}}).pipe((0,I.b)(e=>{this.getNotes().subscribe(),this._labels.next(e)}))}getNotes(){return this._httpClient.get("api/apps/notes/all").pipe((0,I.b)(e=>{this._notes.next(e)}))}getNoteById(e){return this._notes.pipe((0,Q.q)(1),(0,k.U)(t=>{const n=t.find(t=>t.id===e)||null;return this._note.next(n),n}),(0,A.w)(t=>t?(0,T.of)(t):(0,N._)("Could not found the note with id of "+e+"!")))}addTask(e,t){return this._httpClient.post("api/apps/notes/tasks",{note:e,task:t}).pipe((0,A.w)(()=>this.getNotes().pipe((0,A.w)(()=>this.getNoteById(e.id)))))}createNote(e){return this._httpClient.post("api/apps/notes",{note:e}).pipe((0,A.w)(e=>this.getNotes().pipe((0,A.w)(()=>this.getNoteById(e.id).pipe((0,k.U)(()=>e))))))}updateNote(e){const t=(0,J.Z)(e);return t.labels.length&&(t.labels=t.labels.map(e=>e.id)),this._httpClient.patch("api/apps/notes",{updatedNote:t}).pipe((0,I.b)(e=>{this.getNotes().subscribe()}))}deleteNote(e){return this._httpClient.delete("api/apps/notes",{params:{id:e.id}}).pipe((0,k.U)(e=>(this.getNotes().subscribe(),e)))}}return e.\u0275fac=function(t){return new(t||e)(m.LFG(q.eN))},e.\u0275prov=m.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var F=n(38583),B=n(3679);function M(e,t){if(1&e){const e=m.EpF();m.ynx(0),m.TgZ(1,"div",6),m.TgZ(2,"div",7),m.TgZ(3,"button",8),m.NdJ("click",function(){m.CHM(e);const t=m.oxw().ngIf;return m.oxw().removeImage(t)}),m._UZ(4,"mat-icon",9),m.qZA(),m.qZA(),m._UZ(5,"img",10),m.qZA(),m.BQk()}if(2&e){const e=m.oxw().ngIf;m.xp6(4),m.Q6J("svgIcon","heroicons_outline:trash"),m.xp6(1),m.Q6J("src",e.image,m.LSH)}}const $=function(e){return{"text-secondary line-through":e}};function O(e,t){if(1&e){const e=m.EpF();m.ynx(0),m.TgZ(1,"div",17),m.TgZ(2,"mat-checkbox",18),m.NdJ("ngModelChange",function(e){return t.$implicit.completed=e})("change",function(){const t=m.CHM(e).$implicit,n=m.oxw(2).ngIf;return m.oxw().updateTaskOnNote(n,t)}),m.qZA(),m.TgZ(3,"input",19),m.NdJ("ngModelChange",function(e){return t.$implicit.content=e})("input",function(){const t=m.CHM(e).$implicit,n=m.oxw(2).ngIf;return m.oxw().updateTaskOnNote(n,t)}),m.qZA(),m.TgZ(4,"mat-icon",20),m.NdJ("click",function(){const t=m.CHM(e).$implicit,n=m.oxw(2).ngIf;return m.oxw().removeTaskFromNote(n,t)}),m.qZA(),m.qZA(),m.BQk()}if(2&e){const e=t.$implicit;m.xp6(2),m.Q6J("color","primary")("ngModel",e.completed),m.xp6(1),m.Q6J("ngClass",m.VKq(6,$,e.completed))("placeholder","Task")("ngModel",e.content),m.xp6(1),m.Q6J("svgIcon","heroicons_solid:x")}}function U(e,t){if(1&e){const e=m.EpF();m.ynx(0),m.TgZ(1,"div",11),m.YNc(2,O,5,8,"ng-container",12),m.TgZ(3,"div",13),m._UZ(4,"mat-icon",14),m.TgZ(5,"input",15,16),m.NdJ("keydown.enter",function(){m.CHM(e);const t=m.MAs(6),n=m.oxw().ngIf;return m.oxw().addTaskToNote(n,t.value),t.value=""}),m.qZA(),m.qZA(),m.qZA(),m.BQk()}if(2&e){const e=m.oxw().ngIf,t=m.oxw();m.xp6(2),m.Q6J("ngForOf",e.tasks)("ngForTrackBy",t.trackByFn),m.xp6(2),m.Q6J("svgIcon","heroicons_solid:plus"),m.xp6(1),m.Q6J("placeholder","Add task")}}function L(e,t){if(1&e){const e=m.EpF();m.ynx(0),m.TgZ(1,"div",22),m.TgZ(2,"div"),m._uU(3),m.qZA(),m.TgZ(4,"mat-icon",23),m.NdJ("click",function(){const t=m.CHM(e).$implicit,n=m.oxw(2).ngIf;return m.oxw().toggleLabelOnNote(n,t)}),m.qZA(),m.qZA(),m.BQk()}if(2&e){const e=t.$implicit;m.xp6(3),m.hij(" ",e.title," "),m.xp6(1),m.Q6J("svgIcon","heroicons_solid:x-circle")}}function Y(e,t){if(1&e&&(m.ynx(0),m.TgZ(1,"div",21),m.YNc(2,L,5,2,"ng-container",12),m.qZA(),m.BQk()),2&e){const e=m.oxw().ngIf,t=m.oxw();m.xp6(2),m.Q6J("ngForOf",e.labels)("ngForTrackBy",t.trackByFn)}}function D(e,t){if(1&e){const e=m.EpF();m.ynx(0),m.TgZ(1,"div",24),m.TgZ(2,"button",25),m.NdJ("click",function(){m.CHM(e);const t=m.oxw().ngIf;return m.oxw().createNote(t)}),m._uU(3," Save "),m.qZA(),m.qZA(),m.BQk()}if(2&e){const e=m.oxw().ngIf;m.xp6(2),m.Q6J("color","primary")("disabled",!e.title&&!e.content)}}function S(e,t){if(1&e){const e=m.EpF();m.ynx(0),m.TgZ(1,"button",36),m.NdJ("click",function(){const t=m.CHM(e).$implicit,n=m.oxw(3).ngIf;return m.oxw().toggleLabelOnNote(n,t)}),m.TgZ(2,"span",13),m._UZ(3,"mat-checkbox",37),m.TgZ(4,"span",38),m._uU(5),m.qZA(),m.qZA(),m.qZA(),m.BQk()}if(2&e){const e=t.$implicit,n=m.oxw(3).ngIf,i=m.oxw();m.xp6(3),m.Q6J("color","primary")("checked",i.isNoteHasLabel(n,e)),m.xp6(2),m.Oqu(e.title)}}function H(e,t){if(1&e&&(m.ynx(0),m.YNc(1,S,6,3,"ng-container",35),m.BQk()),2&e){const e=t.ngIf;m.xp6(1),m.Q6J("ngForOf",e)}}function R(e,t){if(1&e){const e=m.EpF();m.ynx(0),m.TgZ(1,"div",26),m.TgZ(2,"div",27),m.TgZ(3,"div"),m.TgZ(4,"input",28,29),m.NdJ("change",function(){m.CHM(e);const t=m.MAs(5),n=m.oxw().ngIf;return m.oxw().uploadImage(n,t.files)}),m.qZA(),m.TgZ(6,"label",30),m._UZ(7,"mat-icon",31),m.qZA(),m.qZA(),m.TgZ(8,"button",8),m.NdJ("click",function(){m.CHM(e);const t=m.oxw().ngIf;return m.oxw().addTasksToNote(t)}),m._UZ(9,"mat-icon",31),m.qZA(),m.TgZ(10,"button",32),m._UZ(11,"mat-icon",31),m.qZA(),m.TgZ(12,"mat-menu",null,33),m.YNc(14,H,2,1,"ng-container",1),m.ALo(15,"async"),m.qZA(),m.TgZ(16,"button",8),m.NdJ("click",function(){m.CHM(e);const t=m.oxw().ngIf;return m.oxw().toggleArchiveOnNote(t)}),m._UZ(17,"mat-icon",31),m.qZA(),m.TgZ(18,"button",8),m.NdJ("click",function(){m.CHM(e);const t=m.oxw().ngIf;return m.oxw().deleteNote(t)}),m._UZ(19,"mat-icon",31),m.qZA(),m.qZA(),m.TgZ(20,"button",34),m._uU(21," Close "),m.qZA(),m.qZA(),m.BQk()}if(2&e){const e=m.MAs(13),t=m.oxw(2);m.xp6(4),m.Q6J("multiple",!1)("accept","image/jpeg, image/png"),m.xp6(3),m.Q6J("svgIcon","heroicons_outline:photograph"),m.xp6(2),m.Q6J("svgIcon","heroicons_outline:clipboard-list"),m.xp6(1),m.Q6J("matMenuTriggerFor",e),m.xp6(1),m.Q6J("svgIcon","heroicons_outline:tag"),m.xp6(3),m.Q6J("ngIf",m.lcZ(15,9,t.labels$)),m.xp6(3),m.Q6J("svgIcon","heroicons_outline:archive"),m.xp6(2),m.Q6J("svgIcon","heroicons_outline:trash")}}function j(e,t){if(1&e){const e=m.EpF();m.ynx(0),m.YNc(1,M,6,2,"ng-container",1),m.TgZ(2,"div",2),m.TgZ(3,"div"),m.TgZ(4,"input",3),m.NdJ("ngModelChange",function(e){return t.ngIf.title=e})("input",function(){const t=m.CHM(e).ngIf;return m.oxw().updateNoteDetails(t)}),m.qZA(),m.qZA(),m.TgZ(5,"div",4),m.TgZ(6,"textarea",5),m.NdJ("ngModelChange",function(e){return t.ngIf.content=e})("input",function(){const t=m.CHM(e).ngIf;return m.oxw().updateNoteDetails(t)}),m.qZA(),m.qZA(),m.YNc(7,U,7,4,"ng-container",1),m.YNc(8,Y,3,2,"ng-container",1),m.YNc(9,D,4,2,"ng-container",1),m.YNc(10,R,22,11,"ng-container",1),m.qZA(),m.BQk()}if(2&e){const e=t.ngIf;m.xp6(1),m.Q6J("ngIf",e.image),m.xp6(3),m.Q6J("placeholder","Title")("ngModel",e.title),m.xp6(2),m.Q6J("placeholder","Note")("ngModel",e.content),m.xp6(1),m.Q6J("ngIf",e.tasks),m.xp6(1),m.Q6J("ngIf",e.labels&&e.labels.length),m.xp6(1),m.Q6J("ngIf",!e.id),m.xp6(1),m.Q6J("ngIf",e.id)}}let E=(()=>{class e{constructor(e,t,n,i){this._changeDetectorRef=e,this._data=t,this._notesService=n,this._matDialogRef=i,this.noteChanged=new Z.xQ,this._unsubscribeAll=new Z.xQ}ngOnInit(){this._data.note.id?(this._notesService.getNoteById(this._data.note.id).subscribe(),this.note$=this._notesService.note$):this.note$=(0,T.of)({id:null,title:"",content:"",tasks:null,image:null,reminder:null,labels:[],archived:!1,createdAt:null,updatedAt:null}),this.labels$=this._notesService.labels$,this.noteChanged.pipe((0,_.R)(this._unsubscribeAll),(0,y.b)(500),(0,A.w)(e=>this._notesService.updateNote(e))).subscribe(()=>{this._changeDetectorRef.markForCheck()})}ngOnDestroy(){this._unsubscribeAll.next(),this._unsubscribeAll.complete()}createNote(e){this._notesService.createNote(e).pipe((0,k.U)(()=>{this.note$=this._notesService.note$})).subscribe()}uploadImage(e,t){if(!t.length)return;const n=t[0];["image/jpeg","image/png"].includes(n.type)&&this._readAsDataURL(n).then(t=>{e.image=t,this.noteChanged.next(e)})}removeImage(e){e.image=null,this.noteChanged.next(e)}addTasksToNote(e){e.tasks||(e.tasks=[])}addTaskToNote(e,t){""!==t.trim()&&this._notesService.addTask(e,t).subscribe()}removeTaskFromNote(e,t){e.tasks=e.tasks.filter(e=>e.id!==t.id),this.noteChanged.next(e)}updateTaskOnNote(e,t){t.id&&this.noteChanged.next(e)}isNoteHasLabel(e,t){return!!e.labels.find(e=>e.id===t.id)}toggleLabelOnNote(e,t){this.isNoteHasLabel(e,t)?e.labels=e.labels.filter(e=>e.id!==t.id):e.labels.push(t),this.noteChanged.next(e)}toggleArchiveOnNote(e){e.archived=!e.archived,this.noteChanged.next(e),this._matDialogRef.close()}updateNoteDetails(e){this.noteChanged.next(e)}deleteNote(e){this._notesService.deleteNote(e).subscribe(e=>{e&&this._matDialogRef.close()})}trackByFn(e,t){return t.id||e}_readAsDataURL(e){return new Promise((t,n)=>{const i=new FileReader;i.onload=()=>{t(i.result)},i.onerror=e=>{n(e)},i.readAsDataURL(e)})}}return e.\u0275fac=function(t){return new(t||e)(m.Y36(m.sBO),m.Y36(c.WI),m.Y36(C),m.Y36(c.so))},e.\u0275cmp=m.Xpm({type:e,selectors:[["notes-details"]],decls:3,vars:3,consts:[[1,"flex","flex-col","flex-auto","md:w-160","md:min-w-160","-m-6"],[4,"ngIf"],[1,"m-4"],[1,"w-full","p-2","text-2xl",3,"placeholder","ngModel","ngModelChange","input"],[1,"flex","w-full","py-5","px-2"],["matTextareaAutosize","",1,"w-full",3,"placeholder","ngModel","ngModelChange","input"],[1,"relative","w-full"],[1,"absolute","right-0","bottom-0","p-4"],["mat-icon-button","",3,"click"],[1,"text-white",3,"svgIcon"],[1,"w-full","object-cover",3,"src"],[1,"mx-2","mt-4","space-y-1.5"],[4,"ngFor","ngForOf","ngForTrackBy"],[1,"flex","items-center"],[1,"-ml-0.5","icon-size-5","text-hint",3,"svgIcon"],[1,"w-full","ml-1.5","px-1","py-0.5",3,"placeholder","keydown.enter"],["newTaskInput",""],[1,"group","flex","items-center"],[1,"flex","items-center",3,"color","ngModel","ngModelChange","change"],[1,"w-full","px-1","py-0.5",3,"ngClass","placeholder","ngModel","ngModelChange","input"],[1,"hidden","group-hover:flex","ml-auto","icon-size-5","cursor-pointer",3,"svgIcon","click"],[1,"flex","flex-wrap","items-center","mx-1","mt-6"],[1,"flex","items-center","m-1","py-0.5","px-3","rounded-full","text-sm","font-medium","text-gray-500","bg-gray-100","dark:text-gray-300","dark:bg-gray-700"],[1,"ml-1","icon-size-4","cursor-pointer",3,"svgIcon","click"],[1,"flex","items-center","justify-end","mt-4"],["mat-flat-button","",3,"color","disabled","click"],[1,"flex","items-center","justify-between","mt-4"],[1,"flex","items-center","space-x-2"],["id","image-file-input","type","file",1,"absolute","h-0","w-0","opacity-0","invisible","pointer-events-none",3,"multiple","accept","change"],["imageFileInput",""],["for","image-file-input","matRipple","",1,"flex","items-center","justify-center","w-10","h-10","rounded-full","cursor-pointer","hover:bg-gray-400","hover:bg-opacity-20","dark:hover:bg-black","dark:hover:bg-opacity-5"],[3,"svgIcon"],["mat-icon-button","",3,"matMenuTriggerFor"],["labelsMenu","matMenu"],["mat-flat-button","","matDialogClose",""],[4,"ngFor","ngForOf"],["mat-menu-item","",3,"click"],["disableRipple","",1,"flex","items-center","pointer-events-none",3,"color","checked"],[1,"ml-1","leading-5"]],template:function(e,t){1&e&&(m.TgZ(0,"div",0),m.YNc(1,j,11,9,"ng-container",1),m.ALo(2,"async"),m.qZA()),2&e&&(m.xp6(1),m.Q6J("ngIf",m.lcZ(2,1,t.note$)))},directives:[F.O5,B.Fj,B.JJ,B.On,a.D7,o.lW,r.Hw,F.sg,s.oG,F.mk,g.wG,u.p6,u.VK,c.ZT,u.OP],pipes:[F.Ov],encapsulation:2,changeDetection:0}),e})();var W=n(45435);function z(e,t){if(1&e){const e=m.EpF();m.ynx(0),m.TgZ(1,"mat-form-field",13),m.TgZ(2,"button",14),m.NdJ("click",function(){const t=m.CHM(e).$implicit;return m.oxw(2).deleteLabel(t.id)}),m._UZ(3,"mat-icon",9),m.qZA(),m.TgZ(4,"input",15),m.NdJ("ngModelChange",function(e){return t.$implicit.title=e})("input",function(){const t=m.CHM(e).$implicit;return m.oxw(2).updateLabel(t)}),m.qZA(),m.qZA(),m.BQk()}if(2&e){const e=t.$implicit;m.xp6(3),m.Q6J("svgIcon","heroicons_solid:trash"),m.xp6(1),m.Q6J("autocomplete","off")("ngModel",e.title)}}function X(e,t){if(1&e&&(m.ynx(0),m.YNc(1,z,5,3,"ng-container",12),m.BQk()),2&e){const e=t.ngIf,n=m.oxw();m.xp6(1),m.Q6J("ngForOf",e)("ngForTrackBy",n.trackByFn)}}let K=(()=>{class e{constructor(e,t){this._changeDetectorRef=e,this._notesService=t,this.labelChanged=new Z.xQ,this._unsubscribeAll=new Z.xQ}ngOnInit(){this.labels$=this._notesService.labels$,this.labelChanged.pipe((0,_.R)(this._unsubscribeAll),(0,y.b)(500),(0,W.h)(e=>""!==e.title.trim()),(0,A.w)(e=>this._notesService.updateLabel(e))).subscribe(()=>{this._changeDetectorRef.markForCheck()})}ngOnDestroy(){this._unsubscribeAll.next(),this._unsubscribeAll.complete()}addLabel(e){this._notesService.addLabel(e).subscribe()}updateLabel(e){this.labelChanged.next(e)}deleteLabel(e){this._notesService.deleteLabel(e).subscribe(()=>{this._changeDetectorRef.markForCheck()})}trackByFn(e,t){return t.id||e}}return e.\u0275fac=function(t){return new(t||e)(m.Y36(m.sBO),m.Y36(C))},e.\u0275cmp=m.Xpm({type:e,selectors:[["notes-labels"]],decls:14,vars:10,consts:[[1,"flex","flex-col","flex-auto","w-80","min-w-80","p-2","md:p-4"],[1,"flex","items-center","justify-between"],[1,"text-2xl","font-semibold"],["matDialogClose","","mat-icon-button",""],[3,"svgIcon"],[1,"fuse-mat-dense","w-full","mt-8",3,"floatLabel"],["name","new-label","matInput","",3,"autocomplete","placeholder"],["newLabelInput",""],["mat-icon-button","","matSuffix","",3,"click"],[1,"icon-size-5",3,"svgIcon"],[1,"flex","flex-col","mt-4"],[4,"ngIf"],[4,"ngFor","ngForOf","ngForTrackBy"],[1,"fuse-mat-dense","w-full"],["mat-icon-button","","matPrefix","",3,"click"],["required","","matInput","",3,"autocomplete","ngModel","ngModelChange","input"]],template:function(e,t){if(1&e){const e=m.EpF();m.TgZ(0,"div",0),m.TgZ(1,"div",1),m.TgZ(2,"div",2),m._uU(3,"Edit labels"),m.qZA(),m.TgZ(4,"button",3),m._UZ(5,"mat-icon",4),m.qZA(),m.qZA(),m.TgZ(6,"mat-form-field",5),m._UZ(7,"input",6,7),m.TgZ(9,"button",8),m.NdJ("click",function(){m.CHM(e);const n=m.MAs(8);return t.addLabel(n.value),n.value=""}),m._UZ(10,"mat-icon",9),m.qZA(),m.qZA(),m.TgZ(11,"div",10),m.YNc(12,X,2,2,"ng-container",11),m.ALo(13,"async"),m.qZA(),m.qZA()}if(2&e){const e=m.MAs(8);m.xp6(5),m.Q6J("svgIcon","heroicons_outline:x"),m.xp6(1),m.Q6J("floatLabel","always"),m.xp6(1),m.Q6J("autocomplete","off")("placeholder","Create new label"),m.xp6(2),m.ekj("invisible",""===e.value.trim()),m.xp6(1),m.Q6J("svgIcon","heroicons_solid:check-circle"),m.xp6(2),m.Q6J("ngIf",m.lcZ(13,8,t.labels$))}},directives:[o.lW,c.ZT,r.Hw,l.KE,a.Nt,l.R9,F.O5,F.sg,l.qo,B.Fj,B.Q7,B.JJ,B.On],pipes:[F.Ov],encapsulation:2,changeDetection:0}),e})();var P=n(25578);const G=function(e,t){return{"bg-gray-200 dark:bg-gray-700 text-primary dark:text-primary-400":e,"text-hint hover:bg-hover":t}};function V(e,t){if(1&e){const e=m.EpF();m.ynx(0),m.TgZ(1,"div",6),m.NdJ("click",function(){const t=m.CHM(e).$implicit;return m.oxw(2).filterByLabel(t.id)}),m._UZ(2,"mat-icon",7),m.TgZ(3,"div",8),m._uU(4),m.qZA(),m.qZA(),m.BQk()}if(2&e){const e=t.$implicit,n=m.oxw(2);m.xp6(1),m.Q6J("ngClass",m.WLB(4,G,"label:"+e.id===n.filterStatus,"label:"+e.id!==n.filterStatus))("matRippleDisabled","label:"+e.id===n.filterStatus),m.xp6(1),m.Q6J("svgIcon","heroicons_outline:tag"),m.xp6(2),m.Oqu(e.title)}}function ee(e,t){if(1&e&&(m.ynx(0),m.YNc(1,V,5,7,"ng-container",29),m.BQk()),2&e){const e=t.ngIf,n=m.oxw();m.xp6(1),m.Q6J("ngForOf",e)("ngForTrackBy",n.trackByFn)}}function te(e,t){if(1&e&&(m.ynx(0),m._UZ(1,"img",35),m.BQk()),2&e){const e=m.oxw().$implicit;m.xp6(1),m.Q6J("src",e.image,m.LSH)}}function ne(e,t){if(1&e&&(m.ynx(0),m.TgZ(1,"div",36),m._uU(2),m.qZA(),m.BQk()),2&e){const e=m.oxw().$implicit;m.xp6(2),m.hij(" ",e.title," ")}}function ie(e,t){if(1&e&&(m.ynx(0),m.TgZ(1,"div"),m._uU(2),m.qZA(),m.BQk()),2&e){const e=m.oxw().$implicit;m.xp6(1),m.ekj("text-xl",e.content.length<70),m.xp6(1),m.hij(" ",e.content," ")}}function oe(e,t){1&e&&(m.ynx(0),m.TgZ(1,"div",39),m._UZ(2,"div",40),m.qZA(),m.BQk())}function se(e,t){1&e&&(m.ynx(0),m._UZ(1,"mat-icon",41),m.BQk()),2&e&&(m.xp6(1),m.Q6J("svgIcon","heroicons_solid:check-circle"))}const ce=function(e){return{"text-secondary line-through":e}};function le(e,t){if(1&e&&(m.ynx(0),m.TgZ(1,"div",15),m.YNc(2,oe,3,0,"ng-container",9),m.YNc(3,se,2,1,"ng-container",9),m.TgZ(4,"div",38),m._uU(5),m.qZA(),m.qZA(),m.BQk()),2&e){const e=t.$implicit;m.xp6(2),m.Q6J("ngIf",!e.completed),m.xp6(1),m.Q6J("ngIf",e.completed),m.xp6(1),m.Q6J("ngClass",m.VKq(4,ce,e.completed)),m.xp6(1),m.hij(" ",e.content," ")}}function re(e,t){if(1&e&&(m.ynx(0),m.TgZ(1,"div",37),m.YNc(2,le,6,6,"ng-container",29),m.qZA(),m.BQk()),2&e){const e=m.oxw().$implicit,t=m.oxw(5);m.xp6(2),m.Q6J("ngForOf",e.tasks)("ngForTrackBy",t.trackByFn)}}function ae(e,t){if(1&e&&(m.ynx(0),m.TgZ(1,"div",43),m._uU(2),m.qZA(),m.BQk()),2&e){const e=t.$implicit;m.xp6(2),m.hij(" ",e.title," ")}}function ue(e,t){if(1&e&&(m.ynx(0),m.TgZ(1,"div",42),m.YNc(2,ae,3,1,"ng-container",29),m.qZA(),m.BQk()),2&e){const e=m.oxw().$implicit,t=m.oxw(5);m.xp6(2),m.Q6J("ngForOf",e.labels)("ngForTrackBy",t.trackByFn)}}function ge(e,t){if(1&e){const e=m.EpF();m.ynx(0),m.TgZ(1,"div",33),m.NdJ("click",function(){const t=m.CHM(e).$implicit;return m.oxw(5).openNoteDialog(t)}),m.YNc(2,te,2,1,"ng-container",9),m.TgZ(3,"div",34),m.YNc(4,ne,3,1,"ng-container",9),m.YNc(5,ie,3,3,"ng-container",9),m.YNc(6,re,3,2,"ng-container",9),m.YNc(7,ue,3,2,"ng-container",9),m.qZA(),m.qZA(),m.BQk()}if(2&e){const e=t.$implicit;m.xp6(2),m.Q6J("ngIf",e.image),m.xp6(2),m.Q6J("ngIf",e.title),m.xp6(1),m.Q6J("ngIf",e.content),m.xp6(1),m.Q6J("ngIf",e.tasks),m.xp6(1),m.Q6J("ngIf",e.labels)}}function pe(e,t){if(1&e&&(m.ynx(0),m.TgZ(1,"div",32),m.YNc(2,ge,8,5,"ng-container",29),m.qZA(),m.BQk()),2&e){const e=t.$implicit,n=m.oxw(4);m.xp6(2),m.Q6J("ngForOf",e.items)("ngForTrackBy",n.trackByFn)}}function de(e,t){if(1&e&&m.YNc(0,pe,3,2,"ng-container",29),2&e){const e=t.$implicit,n=m.oxw(3);m.Q6J("ngForOf",e)("ngForTrackBy",n.trackByFn)}}function fe(e,t){if(1&e&&(m.ynx(0),m.TgZ(1,"fuse-masonry",30),m.YNc(2,de,1,2,"ng-template",null,31,m.W1O),m.qZA(),m.BQk()),2&e){const e=m.MAs(3),t=m.oxw().ngIf,n=m.oxw();m.xp6(1),m.Q6J("items",t)("columns",n.masonryColumns)("columnsTemplate",e)}}function he(e,t){if(1&e&&(m.ynx(0),m.YNc(1,fe,4,3,"ng-container",26),m.BQk()),2&e){const e=t.ngIf;m.oxw();const n=m.MAs(39);m.xp6(1),m.Q6J("ngIf",e.length)("ngIfElse",n)}}function me(e,t){1&e&&(m.TgZ(0,"div",44),m.TgZ(1,"div",45),m._uU(2,"Loading..."),m.qZA(),m.qZA())}function xe(e,t){1&e&&(m.TgZ(0,"div",44),m._UZ(1,"mat-icon",46),m.TgZ(2,"div",45),m._uU(3,"There are no notes!"),m.qZA(),m.qZA()),2&e&&(m.xp6(1),m.Q6J("svgIcon","iconsmind:file_hide"))}const be=[{path:"",component:x,children:[{path:"",component:(()=>{class e{constructor(e,t,n,i){this._changeDetectorRef=e,this._fuseMediaWatcherService=t,this._matDialog=n,this._notesService=i,this.drawerMode="side",this.drawerOpened=!0,this.filter$=new b.X("notes"),this.searchQuery$=new b.X(null),this.masonryColumns=4,this._unsubscribeAll=new Z.xQ}get filterStatus(){return this.filter$.value}ngOnInit(){this._notesService.getLabels().subscribe(),this._notesService.getNotes().subscribe(),this.labels$=this._notesService.labels$,this.notes$=(0,v.aj)([this._notesService.notes$,this.filter$,this.searchQuery$]).pipe((0,w.x)(),(0,k.U)(([e,t,n])=>{if(!e||!e.length)return;let i=e;n&&(n=n.trim().toLowerCase(),i=i.filter(e=>e.title.toLowerCase().includes(n)||e.content.toLowerCase().includes(n)));const o="archived"===t;if(i=i.filter(e=>e.archived===o),t.startsWith("label:")){const e=t.split(":")[1];i=i.filter(t=>!!t.labels.find(t=>t.id===e))}return i})),this._fuseMediaWatcherService.onMediaChange$.pipe((0,_.R)(this._unsubscribeAll)).subscribe(({matchingAliases:e})=>{e.includes("lg")?(this.drawerMode="side",this.drawerOpened=!0):(this.drawerMode="over",this.drawerOpened=!1),this.masonryColumns=e.includes("xl")?5:e.includes("lg")?4:e.includes("md")?3:e.includes("sm")?2:1,this._changeDetectorRef.markForCheck()})}ngOnDestroy(){this._unsubscribeAll.next(),this._unsubscribeAll.complete()}addNewNote(){this._matDialog.open(E,{autoFocus:!1,data:{note:{}}})}openEditLabelsDialog(){this._matDialog.open(K,{autoFocus:!1})}openNoteDialog(e){this._matDialog.open(E,{autoFocus:!1,data:{note:(0,J.Z)(e)}})}filterByArchived(){this.filter$.next("archived")}filterByLabel(e){this.filter$.next(`label:${e}`)}filterByQuery(e){this.searchQuery$.next(e)}resetFilter(){this.filter$.next("notes")}trackByFn(e,t){return t.id||e}}return e.\u0275fac=function(t){return new(t||e)(m.Y36(m.sBO),m.Y36(P.T),m.Y36(c.uw),m.Y36(C))},e.\u0275cmp=m.Xpm({type:e,selectors:[["notes-list"]],decls:40,vars:28,consts:[[1,"absolute","inset-0","flex","flex-col","min-w-0","overflow-hidden"],[1,"flex-auto","h-full","bg-card","dark:bg-transparent"],[1,"w-2/3","sm:w-72","lg:w-56","border-r-0","bg-default",3,"mode","opened"],["drawer",""],[1,"p-6","lg:py-8","lg:pl-4","lg:pr-0"],[1,"space-y-2"],["matRipple","",1,"relative","flex","items-center","py-2","px-4","font-medium","rounded-full","cursor-pointer",3,"ngClass","matRippleDisabled","click"],[1,"text-current",3,"svgIcon"],[1,"ml-3","leading-5","select-none","text-default"],[4,"ngIf"],["matRipple","",1,"relative","flex","items-center","py-2","px-4","font-medium","rounded-full","cursor-pointer","hover:bg-hover",3,"click"],[1,"text-hint",3,"svgIcon"],[1,"ml-3","leading-5","select-none"],[1,"flex","flex-col","bg-gray-100","dark:bg-transparent"],[1,"flex","flex-col","flex-auto","p-6","md:p-8"],[1,"flex","items-center"],[1,"flex","items-center","flex-auto"],["mat-icon-button","",1,"flex","lg:hidden","-ml-2",3,"click"],[3,"svgIcon"],[1,"fuse-mat-rounded","fuse-mat-dense","fuse-mat-no-subscript","flex-auto","ml-4","lg:ml-0"],["matPrefix","",1,"icon-size-5",3,"svgIcon"],["matInput","",3,"autocomplete","placeholder","input"],["searchInput",""],["mat-flat-button","",1,"ml-4","px-1","sm:px-4","min-w-10",3,"color","click"],[1,"icon-size-5",3,"svgIcon"],[1,"hidden","sm:inline-block","ml-2"],[4,"ngIf","ngIfElse"],["loading",""],["noNotes",""],[4,"ngFor","ngForOf","ngForTrackBy"],[1,"-mx-2","mt-8",3,"items","columns","columnsTemplate"],["columnsTemplate",""],[1,"flex-1","px-2","space-y-4"],[1,"flex","flex-col","shadow","rounded-2xl","overflow-hidden","cursor-pointer","bg-card",3,"click"],[1,"flex","flex-auto","flex-col","p-6","space-y-4"],[1,"w-full","object-cover",3,"src"],[1,"font-semibold","line-clamp-3"],[1,"space-y-1.5"],[1,"ml-1.5","leading-5",3,"ngClass"],[1,"flex","items-center","justify-center","w-5","h-5"],[1,"w-4","h-4","rounded-full","border-2"],[1,"text-hint","icon-size-5",3,"svgIcon"],[1,"flex","flex-wrap","items-center","-m-1"],[1,"m-1","py-0.5","px-3","rounded-full","text-sm","font-medium","text-gray-500","bg-gray-100","dark:text-gray-300","dark:bg-gray-700"],[1,"flex","flex-auto","flex-col","items-center","justify-center","bg-gray-100","dark:bg-transparent"],[1,"mt-4","text-2xl","font-semibold","tracking-tight","text-secondary"],[1,"icon-size-24",3,"svgIcon"]],template:function(e,t){if(1&e){const e=m.EpF();m.TgZ(0,"div",0),m.TgZ(1,"mat-drawer-container",1),m.TgZ(2,"mat-drawer",2,3),m.TgZ(4,"div",4),m.TgZ(5,"div",5),m.TgZ(6,"div",6),m.NdJ("click",function(){return t.resetFilter()}),m._UZ(7,"mat-icon",7),m.TgZ(8,"div",8),m._uU(9,"Notes"),m.qZA(),m.qZA(),m.TgZ(10,"div",6),m.NdJ("click",function(){return t.filterByArchived()}),m._UZ(11,"mat-icon",7),m.TgZ(12,"div",8),m._uU(13,"Archive"),m.qZA(),m.qZA(),m.YNc(14,ee,2,2,"ng-container",9),m.ALo(15,"async"),m.TgZ(16,"div",10),m.NdJ("click",function(){return t.openEditLabelsDialog()}),m._UZ(17,"mat-icon",11),m.TgZ(18,"div",12),m._uU(19,"Edit labels"),m.qZA(),m.qZA(),m.qZA(),m.qZA(),m.qZA(),m.TgZ(20,"mat-drawer-content",13),m.TgZ(21,"div",14),m.TgZ(22,"div",15),m.TgZ(23,"div",16),m.TgZ(24,"button",17),m.NdJ("click",function(){return m.CHM(e),m.MAs(3).toggle()}),m._UZ(25,"mat-icon",18),m.qZA(),m.TgZ(26,"mat-form-field",19),m._UZ(27,"mat-icon",20),m.TgZ(28,"input",21,22),m.NdJ("input",function(){m.CHM(e);const n=m.MAs(29);return t.filterByQuery(n.value)}),m.qZA(),m.qZA(),m.qZA(),m.TgZ(30,"button",23),m.NdJ("click",function(){return t.addNewNote()}),m._UZ(31,"mat-icon",24),m.TgZ(32,"span",25),m._uU(33,"New note"),m.qZA(),m.qZA(),m.qZA(),m.YNc(34,he,2,2,"ng-container",26),m.ALo(35,"async"),m.YNc(36,me,3,0,"ng-template",null,27,m.W1O),m.YNc(38,xe,4,1,"ng-template",null,28,m.W1O),m.qZA(),m.qZA(),m.qZA(),m.qZA()}if(2&e){const e=m.MAs(37);m.xp6(2),m.Q6J("mode",t.drawerMode)("opened",t.drawerOpened),m.xp6(4),m.Q6J("ngClass",m.WLB(22,G,"notes"===t.filterStatus,"notes"!==t.filterStatus))("matRippleDisabled","notes"===t.filterStatus),m.xp6(1),m.Q6J("svgIcon","heroicons_outline:pencil-alt"),m.xp6(3),m.Q6J("ngClass",m.WLB(25,G,"archived"===t.filterStatus,"archived"!==t.filterStatus))("matRippleDisabled","archived"===t.filterStatus),m.xp6(1),m.Q6J("svgIcon","heroicons_outline:archive"),m.xp6(3),m.Q6J("ngIf",m.lcZ(15,18,t.labels$)),m.xp6(3),m.Q6J("svgIcon","heroicons_outline:pencil"),m.xp6(8),m.Q6J("svgIcon","heroicons_outline:menu"),m.xp6(2),m.Q6J("svgIcon","heroicons_solid:search"),m.xp6(1),m.Q6J("autocomplete","off")("placeholder","Search notes"),m.xp6(2),m.Q6J("color","primary"),m.xp6(1),m.Q6J("svgIcon","heroicons_solid:plus-circle"),m.xp6(3),m.Q6J("ngIf",m.lcZ(35,20,t.notes$))("ngIfElse",e)}},directives:[p.kh,p.jA,g.wG,F.mk,r.Hw,F.O5,p.LW,o.lW,l.KE,l.qo,a.Nt,F.sg,d.H],pipes:[F.Ov],encapsulation:2,changeDetection:0}),e})()}]}];let Ze=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=m.oAB({type:e}),e.\u0275inj=m.cJS({imports:[[i.Bz.forChild(be),o.ot,s.p9,c.Is,l.lN,r.Ps,a.c,u.Tx,g.si,p.SJ,f.O,h.m]]}),e})()}}]);