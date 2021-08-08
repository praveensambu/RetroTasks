(self.webpackChunk_fuse_demo=self.webpackChunk_fuse_demo||[]).push([[1674],{91674:(e,t,o)=>{"use strict";o.r(t),o.d(t,{ColorsModule:()=>g,routes:()=>l});var r=o(63423),a=o(72458),i=o(76627),d=o(65939),n=o(47214),c=o(44466),Z=o(28288),u=o(37716);const l=[{path:"",component:(()=>{class e{constructor(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=u.Xpm({type:e,selectors:[["colors"]],decls:160,vars:0,consts:[[1,"flex","flex-col","flex-auto","min-w-0"],[1,"flex","flex-col","sm:flex-row","flex-0","sm:items-center","sm:justify-between","p-6","sm:py-8","sm:px-10","border-b","bg-card","dark:bg-transparent"],[1,"flex-1","min-w-0"],[1,"flex","flex-wrap","items-center","font-medium"],[1,"whitespace-nowrap","text-primary-500"],[1,"mt-2"],[1,"text-3xl","md:text-4xl","font-extrabold","tracking-tight","leading-7","sm:leading-10","truncate"],[1,"flex-auto","p-6","sm:p-10"],[1,"max-w-3xl","prose","prose-sm"],[1,"my-8","space-y-8"],[1,"grid","grid-cols-3","gap-4"],["matRipple","",1,"flex","flex-col","flex-auto","items-start","justify-center","p-6","rounded","text-on-primary","bg-primary"],[1,"font-medium"],[1,"w-full","my-4","border-b","border-on-primary","border-opacity-50"],[1,"text-on-primary"],["matRipple","",1,"flex","flex-col","flex-auto","items-start","justify-center","p-6","rounded","text-on-accent","bg-accent"],[1,"w-full","my-4","border-b","border-on-accent","border-opacity-50"],[1,"text-on-accent"],["matRipple","",1,"flex","flex-col","flex-auto","items-start","justify-center","p-6","rounded","text-on-warn","bg-warn"],[1,"w-full","my-4","border-b","border-on-warn","border-opacity-50"],[1,"text-on-warn"],["matRipple","",1,"flex","flex-col","flex-auto","items-start","justify-center","p-6","rounded","text-on-primary-200","bg-primary-200"],[1,"w-full","my-4","border-b","border-on-primary-200","border-opacity-50"],[1,"text-on-primary-200"],["matRipple","",1,"flex","flex-col","flex-auto","items-start","justify-center","p-6","rounded","text-on-accent-300","bg-accent-300"],[1,"w-full","my-4","border-b","border-on-accent-300","border-opacity-50"],[1,"text-on-accent-300"],["matRipple","",1,"flex","flex-col","flex-auto","items-start","justify-center","p-6","rounded","text-on-warn-400","bg-warn-400"],[1,"w-full","my-4","border-b","border-on-warn-400","border-opacity-50"],[1,"text-on-warn-400"],[1,"flex","my-8","space-x-16"],[1,"flex","flex-col","space-y-4"],[1,"text-default"],[1,"text-secondary"],[1,"text-hint"],[1,"text-disabled"],[1,"divider"],[1,"py-1","px-2","rounded","bg-card"],[1,"py-1","px-2","rounded","bg-default"],[1,"py-1","px-2","rounded","bg-dialog"],[1,"py-1","px-2","rounded","bg-hover"]],template:function(e,t){1&e&&(u.TgZ(0,"div",0),u.TgZ(1,"div",1),u.TgZ(2,"div",2),u.TgZ(3,"div",3),u.TgZ(4,"div"),u.TgZ(5,"a",4),u._uU(6,"User Interface"),u.qZA(),u.qZA(),u.qZA(),u.TgZ(7,"div",5),u.TgZ(8,"h2",6),u._uU(9," Colors "),u.qZA(),u.qZA(),u.qZA(),u.qZA(),u.TgZ(10,"div",7),u.TgZ(11,"div",8),u.TgZ(12,"p"),u._uU(13," Since Fuse uses Tailwind, all color related utilities such as "),u.TgZ(14,"code"),u._uU(15,"text-red-50"),u.qZA(),u._uU(16," or "),u.TgZ(17,"code"),u._uU(18,"bg-indigo-900"),u.qZA(),u._uU(19," are available by default and they can be configured using Tailwind's configuration. "),u.qZA(),u.TgZ(20,"p"),u._uU(21," In addition to default Tailwind colors, Fuse also provides utilities that changes depending on the selected theme. These utilities are meant to be used in places where you want to have a theme dependent colors such as buttons, backgrounds or texts. "),u.qZA(),u.TgZ(22,"h2"),u._uU(23,"Primary, Accent & Warn"),u.qZA(),u.TgZ(24,"p"),u._uU(25," Fuse provides "),u.TgZ(26,"strong"),u._uU(27,"Primary"),u.qZA(),u._uU(28,", "),u.TgZ(29,"strong"),u._uU(30,"Accent"),u.qZA(),u._uU(31," and "),u.TgZ(32,"strong"),u._uU(33,"Warn"),u.qZA(),u._uU(34," utilities to go with Angular Material theming. These utilities hold variable colors and they change depending on the selected theme color. "),u.qZA(),u.TgZ(35,"p"),u._uU(36," Having these utilities allow you to have dynamic theming throughout your application without hard coding any colors. Each of these utilities also have a complementary "),u.TgZ(37,"code"),u._uU(38,".text-on-XXX"),u.qZA(),u._uU(39," utility to provide a contrasting text color. "),u.qZA(),u.TgZ(40,"div",9),u.TgZ(41,"div",10),u.TgZ(42,"div",11),u.TgZ(43,"div",12),u._uU(44,"Primary"),u.qZA(),u._UZ(45,"div",13),u.TgZ(46,"code",14),u._uU(47,"bg-primary"),u.qZA(),u.TgZ(48,"code",14),u._uU(49,"text-on-primary"),u.qZA(),u.qZA(),u.TgZ(50,"div",15),u.TgZ(51,"div",12),u._uU(52,"Accent"),u.qZA(),u._UZ(53,"div",16),u.TgZ(54,"code",17),u._uU(55,"bg-accent"),u.qZA(),u.TgZ(56,"code",17),u._uU(57,"text-on-accent"),u.qZA(),u.qZA(),u.TgZ(58,"div",18),u.TgZ(59,"div",12),u._uU(60,"Warn"),u.qZA(),u._UZ(61,"div",19),u.TgZ(62,"code",20),u._uU(63,"bg-warn"),u.qZA(),u.TgZ(64,"code",20),u._uU(65,"text-on-warn"),u.qZA(),u.qZA(),u.TgZ(66,"div",21),u.TgZ(67,"div",12),u._uU(68,"Primary 200"),u.qZA(),u._UZ(69,"div",22),u.TgZ(70,"code",23),u._uU(71,"bg-primary-200"),u.qZA(),u.TgZ(72,"code",23),u._uU(73,"text-on-primary-200"),u.qZA(),u.qZA(),u.TgZ(74,"div",24),u.TgZ(75,"div",12),u._uU(76,"Accent 300"),u.qZA(),u._UZ(77,"div",25),u.TgZ(78,"code",26),u._uU(79,"bg-accent-300"),u.qZA(),u.TgZ(80,"code",26),u._uU(81,"text-on-accent-300"),u.qZA(),u.qZA(),u.TgZ(82,"div",27),u.TgZ(83,"div",12),u._uU(84,"Warn 400"),u.qZA(),u._UZ(85,"div",28),u.TgZ(86,"code",29),u._uU(87,"bg-warn-400"),u.qZA(),u.TgZ(88,"code",29),u._uU(89,"text-on-warn-400"),u.qZA(),u.qZA(),u.qZA(),u.qZA(),u.TgZ(90,"p"),u._uU(91," You can change the theme from the "),u.TgZ(92,"i"),u._uU(93,"Settings"),u.qZA(),u._uU(94," panel to observe the primary color changing. "),u.qZA(),u.TgZ(95,"p"),u._uU(96," These variable colors have different hue values just like a default Tailwind color palette and they are also available for other Tailwind color utilities such as "),u.TgZ(97,"strong"),u._uU(98,"border"),u.qZA(),u._uU(99,", "),u.TgZ(100,"strong"),u._uU(101,"ring"),u.qZA(),u._uU(102," and etc: "),u.qZA(),u.TgZ(103,"p"),u.TgZ(104,"code"),u._uU(105,"bg-primary-50"),u.qZA(),u._uU(106,", "),u.TgZ(107,"code"),u._uU(108,"text-accent-900"),u.qZA(),u._uU(109,", "),u.TgZ(110,"code"),u._uU(111,"text-on-warn-500"),u.qZA(),u._uU(112,", "),u.TgZ(113,"code"),u._uU(114,"border-primary"),u.qZA(),u._uU(115,", "),u.TgZ(116,"code"),u._uU(117,"ring-warn-600"),u.qZA(),u._uU(118," ... "),u.qZA(),u.TgZ(119,"h2"),u._uU(120,"Text and Background colors"),u.qZA(),u.TgZ(121,"p"),u._uU(122," Fuse also provides set of utilities to have consistent text and background colors throughout your application without hard coding any colors. They also allow working with dark variant of the selected theme. "),u.qZA(),u.TgZ(123,"p"),u._uU(124," For example, a text node with a "),u.TgZ(125,"code"),u._uU(126,".text-secondary"),u.qZA(),u._uU(127," class will have a proper lighter color compared to main text color depending on the selected scheme. "),u.qZA(),u.TgZ(128,"p"),u._uU(129," Here's the complete list of the available text and background utilities: "),u.qZA(),u.TgZ(130,"div",30),u.TgZ(131,"div",31),u.TgZ(132,"div"),u.TgZ(133,"code",32),u._uU(134,".text-default"),u.qZA(),u.qZA(),u.TgZ(135,"div"),u.TgZ(136,"code",33),u._uU(137,".text-secondary"),u.qZA(),u.qZA(),u.TgZ(138,"div"),u.TgZ(139,"code",34),u._uU(140,".text-hint"),u.qZA(),u.qZA(),u.TgZ(141,"div"),u.TgZ(142,"code",35),u._uU(143,".text-disabled"),u.qZA(),u.qZA(),u.TgZ(144,"div"),u.TgZ(145,"code",36),u._uU(146,".divider"),u.qZA(),u.qZA(),u.qZA(),u.TgZ(147,"div",31),u.TgZ(148,"div",37),u.TgZ(149,"code"),u._uU(150,".bg-card"),u.qZA(),u.qZA(),u.TgZ(151,"div",38),u.TgZ(152,"code"),u._uU(153,".bg-default"),u.qZA(),u.qZA(),u.TgZ(154,"div",39),u.TgZ(155,"code"),u._uU(156,".bg-dialog"),u.qZA(),u.qZA(),u.TgZ(157,"div",40),u.TgZ(158,"code"),u._uU(159,".bg-hover"),u.qZA(),u.qZA(),u.qZA(),u.qZA(),u.qZA(),u.qZA(),u.qZA())},directives:[a.wG],encapsulation:2,data:{animation:Z.L}}),e})()}];let g=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=u.oAB({type:e}),e.\u0275inj=u.cJS({imports:[[r.Bz.forChild(l),i.Ps,a.si,d.Nh,n.$A,c.m]]}),e})()}}]);