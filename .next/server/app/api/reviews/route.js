"use strict";(()=>{var e={};e.id=7186,e.ids=[7186],e.modules={11185:e=>{e.exports=require("mongoose")},20399:e=>{e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},30517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},14300:e=>{e.exports=require("buffer")},6113:e=>{e.exports=require("crypto")},12781:e=>{e.exports=require("stream")},73837:e=>{e.exports=require("util")},39763:(e,r,t)=>{t.r(r),t.d(r,{originalPathname:()=>w,patchFetch:()=>b,requestAsyncStorage:()=>g,routeModule:()=>y,serverHooks:()=>f,staticGenerationAsyncStorage:()=>v});var n={};t.r(n),t.d(n,{GET:()=>h,POST:()=>m});var o=t(49303),i=t(88716),a=t(60670),s=t(87070),u=t(41482),p=t.n(u),l=t(2021),c=t(27401),d=t(7998);async function m(e){try{let r=e.cookies.get("auth-token")?.value;if(!r)return s.NextResponse.json({error:"Unauthorized"},{status:401});let t=p().verify(r,process.env.JWT_SECRET);await (0,l.Z)();let n=await e.json(),o=await d.Z.findById(n.job);if(!o)return s.NextResponse.json({error:"Job not found"},{status:404});if("completed"!==o.status)return s.NextResponse.json({error:"Job must be completed before submitting a review"},{status:400});let i=await c.Z.create({...n,reviewer:t.userId});return s.NextResponse.json(i,{status:201})}catch(e){return console.error("Error creating review:",e),s.NextResponse.json({error:"Error creating review"},{status:500})}}async function h(e){try{let r=e.cookies.get("auth-token")?.value;if(!r)return s.NextResponse.json({error:"Unauthorized"},{status:401});p().verify(r,process.env.JWT_SECRET),await (0,l.Z)();let{searchParams:t}=new URL(e.url),n=t.get("userId");if(!n)return s.NextResponse.json({error:"User ID is required"},{status:400});let o=await c.Z.find({reviewee:n}).populate("reviewer","name").populate("job","title");return s.NextResponse.json(o)}catch(e){return console.error("Error fetching reviews:",e),s.NextResponse.json({error:"Error fetching reviews"},{status:500})}}let y=new o.AppRouteRouteModule({definition:{kind:i.x.APP_ROUTE,page:"/api/reviews/route",pathname:"/api/reviews",filename:"route",bundlePath:"app/api/reviews/route"},resolvedPagePath:"/Users/hunterricks/Downloads/stackblitz-starters-3acn8s (7)/app/api/reviews/route.ts",nextConfigOutput:"",userland:n}),{requestAsyncStorage:g,staticGenerationAsyncStorage:v,serverHooks:f}=y,w="/api/reviews/route";function b(){return(0,a.patchFetch)({serverHooks:f,staticGenerationAsyncStorage:v})}},2021:(e,r,t)=>{t.d(r,{Z:()=>s});var n=t(11185),o=t.n(n);if(!process.env.MONGODB_URI)throw Error("Please define the MONGODB_URI environment variable");let i=process.env.MONGODB_URI,a=global.mongooseCache;a||(a=global.mongooseCache={conn:null,promise:null});let s=async function(){if(a.conn)return a.conn;a.promise||(a.promise=o().connect(i,{bufferCommands:!1}).then(e=>e.connection));try{a.conn=await a.promise}catch(e){throw a.promise=null,e}return a.conn}},7998:(e,r,t)=>{t.d(r,{Z:()=>a});var n=t(11185),o=t.n(n);t(71732);let i=new(o()).Schema({title:{type:String,required:[!0,"Please provide a title for this job."],maxlength:[100,"Title cannot be more than 100 characters"]},description:{type:String,required:[!0,"Please provide a description for this job."],maxlength:[2e3,"Description cannot be more than 2000 characters"]},category:{type:String,required:[!0,"Please specify the category of this job."],enum:["renovation","plumbing","electrical","painting","landscaping","cleaning","other"]},location:{type:String,required:[!0,"Please specify the location for this job."]},budget:{type:Number,min:[0,"Budget cannot be negative"]},minHourlyRate:{type:Number,min:[0,"Hourly rate cannot be negative"]},maxHourlyRate:{type:Number,min:[0,"Hourly rate cannot be negative"]},budgetType:{type:String,enum:["fixed","hourly"],required:[!0,"Please specify the budget type."]},scope:{type:String,required:[!0,"Please specify the scope of this job."],enum:["small","medium","large"]},duration:{type:String,required:[!0,"Please specify the duration of this job."],enum:["1-3","3-6","6+"]},experienceLevel:{type:String,required:[!0,"Please specify the required experience level."],enum:["entry","intermediate","expert"]},skills:[{type:String,required:[!0,"Please specify at least one required skill."]}],postedBy:{type:o().Schema.Types.ObjectId,ref:"User",required:[!0,"Please provide the user who posted this job."]},status:{type:String,enum:["open","in_progress","completed","cancelled"],default:"open"},paymentStatus:{type:String,enum:["pending","escrow","released","refunded"],default:"pending"},createdAt:{type:Date,default:Date.now},updatedAt:{type:Date,default:Date.now}});i.pre("save",function(e){this.updatedAt=new Date,e()});let a=o().models.Job||o().model("Job",i)},27401:(e,r,t)=>{t.d(r,{Z:()=>a});var n=t(11185),o=t.n(n);let i=new(o()).Schema({job:{type:o().Schema.Types.ObjectId,ref:"Job",required:[!0,"Please provide the job this review is for."]},reviewer:{type:o().Schema.Types.ObjectId,ref:"User",required:[!0,"Please provide the user who wrote this review."]},reviewee:{type:o().Schema.Types.ObjectId,ref:"User",required:[!0,"Please provide the user who is being reviewed."]},rating:{type:Number,required:[!0,"Please provide a rating."],min:1,max:5},comment:{type:String,required:[!0,"Please provide a comment for this review."],maxlength:[500,"Comment cannot be more than 500 characters"]},createdAt:{type:Date,default:Date.now}}),a=o().models.Review||o().model("Review",i)},71732:(e,r,t)=>{t.d(r,{Z:()=>a});var n=t(11185),o=t.n(n);let i=new(o()).Schema({name:{type:String,required:[!0,"Please provide a name"],maxlength:[60,"Name cannot be more than 60 characters"]},email:{type:String,required:[!0,"Please provide an email"],unique:!0,lowercase:!0,trim:!0},password:{type:String,required:[!0,"Please provide a password"],minlength:[8,"Password must be at least 8 characters long"]},fcmTokens:[{type:String}],createdAt:{type:Date,default:Date.now}}),a=o().models.User||o().model("User",i)}};var r=require("../../../webpack-runtime.js");r.C(e);var t=e=>r(r.s=e),n=r.X(0,[9276,5972,1482],()=>t(39763));module.exports=n})();