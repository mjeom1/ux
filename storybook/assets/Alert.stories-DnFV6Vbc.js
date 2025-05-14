import{b as d,w as H,o as L,d as m,e as i,f as c,g as v,t as C,j as f,k as Y}from"./vue.esm-bundler-COLwEeZd.js";import"./index-BWINGljf.js";const $={key:0,class:"alert"},N={class:"alert__panel"},V={key:0,class:"alert__title"},I=["innerHTML"],W={class:"alert__cta"},F={__name:"Alert",props:{isActive:{type:Boolean,default:!1},title:{type:String,default:""},content:{type:String,default:""},successText:{type:String,default:"확인"},successFunction:{type:Function,default:()=>{}}},emits:["close"],setup(s,{emit:t}){const p=t,e=s,n=d(e.isActive),A=d(null);function w(){p("close"),e.successFunction(),document.documentElement.style.overflowY="",document.body.style.overflowY=""}function M(){document.documentElement.style.overflowY="hidden",document.body.style.overflowY="hidden"}return H(()=>e.isActive,()=>{n.value=e.isActive,n.value&&M()}),L(()=>{n.value&&A.value.focus()}),(o,j)=>n.value?(f(),m("div",$,[c("div",N,[o.$slots.title||e.title?(f(),m("p",V,[v(o.$slots,"title",{},()=>[Y(C(e.title),1)])])):i("",!0),o.$slots.content||e.content?v(o.$slots,"content",{key:1},()=>[c("div",{class:"alert__message",innerHTML:e.content},null,8,I)]):i("",!0),c("div",W,[c("button",{ref_key:"closeButton",ref:A,class:"btn bg-secondary btn--small",type:"button",onClick:w},C(e.successText),513)])])])):i("",!0)}},z={title:"Example/Alert",component:F,tags:["autodocs"],argTypes:{isActive:{control:"boolean"},title:{control:"text"},content:{control:"text"},successText:{control:"text"},successFunction:{action:"successFunction"}},args:{isActive:!1,title:"알림",content:"이것은 기본 알림 메시지입니다.",successText:"확인"}},r={render:s=>({components:{Alert:F},setup(){const t=d(s.isActive);return{args:s,isActive:t,openAlert:()=>{t.value=!0},closeAlert:()=>{t.value=!1}}},template:`
          <div>
            <button @click="openAlert" class="btn bg-primary btn--small">
              알림 열기
            </button>
            <Alert
                v-bind="args"
                :isActive="isActive"
                @close="closeAlert"
            />
          </div>
        `})},a={args:{isActive:!0}},u={args:{isActive:!1}},l={args:{isActive:!0,title:"커스텀 제목",content:"커스텀 내용입니다.<br>HTML 태그도 지원합니다.",successText:"닫기"}};var g,B,b;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Alert
    },
    setup() {
      const isActive = ref(args.isActive); // args의 상태를 리액티브로 바인딩
      const openAlert = () => {
        isActive.value = true;
      };
      const closeAlert = () => {
        isActive.value = false;
      };
      return {
        args,
        isActive,
        openAlert,
        closeAlert
      };
    },
    template: \`
          <div>
            <button @click="openAlert" class="btn bg-primary btn--small">
              알림 열기
            </button>
            <Alert
                v-bind="args"
                :isActive="isActive"
                @close="closeAlert"
            />
          </div>
        \`
  })
}`,...(b=(B=r.parameters)==null?void 0:B.docs)==null?void 0:b.source}}};var _,y,E;a.parameters={...a.parameters,docs:{...(_=a.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    isActive: true
  }
}`,...(E=(y=a.parameters)==null?void 0:y.docs)==null?void 0:E.source}}};var T,D,h;u.parameters={...u.parameters,docs:{...(T=u.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    isActive: false
  }
}`,...(h=(D=u.parameters)==null?void 0:D.docs)==null?void 0:h.source}}};var x,S,k;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    isActive: true,
    title: '커스텀 제목',
    content: '커스텀 내용입니다.<br>HTML 태그도 지원합니다.',
    successText: '닫기'
  }
}`,...(k=(S=l.parameters)==null?void 0:S.docs)==null?void 0:k.source}}};const G=["WithButton","Default","Inactive","CustomText"];export{l as CustomText,a as Default,u as Inactive,r as WithButton,G as __namedExportsOrder,z as default};
