(this["webpackJsonpppmtool-react-client"]=this["webpackJsonpppmtool-react-client"]||[]).push([[0],{50:function(e,t,a){},51:function(e,t,a){},76:function(e,t,a){"use strict";a.r(t);var r=a(0),c=a(1),n=a.n(c),s=a(25),i=a.n(s),o=(a(50),a(2)),l=a(3),d=a(6),j=a(5),u=(a(51),a(9)),p=function(){return Object(r.jsx)(n.a.Fragment,{children:Object(r.jsx)(u.b,{to:"/addProject",className:"btn btn-lg btn-info",children:"Create a Project"})})},h=a(4),b=a(10),m=a.n(b),O=a(17),v=a(14),f=a.n(v),x="GET_ERRORS",g="GET_PROJECTS",y="GET_PROJECT",N="DELETE_PROJECT",k="GET_BACKLOG",C="GET_PROJECT_TASK",w="DELETE_PROJECT_TASK",P="SET_CURRENT_USER",S=function(e,t){return function(){var a=Object(O.a)(m.a.mark((function a(r){return m.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,f.a.post("/api/project",e);case 3:t.push("/dashboard"),r({type:x,payload:{}}),a.next=10;break;case 7:a.prev=7,a.t0=a.catch(0),r({type:x,payload:a.t0.response.data});case 10:case"end":return a.stop()}}),a,null,[[0,7]])})));return function(e){return a.apply(this,arguments)}}()},_=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(){var e;Object(o.a)(this,a);for(var r=arguments.length,c=new Array(r),n=0;n<r;n++)c[n]=arguments[n];return(e=t.call.apply(t,[this].concat(c))).onDeleteClick=function(t){e.props.deleteProject(t)},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props.project;return Object(r.jsx)("div",{className:"container",children:Object(r.jsx)("div",{className:"card card-body bg-light mb-3",children:Object(r.jsxs)("div",{className:"row",children:[Object(r.jsx)("div",{className:"col-2",children:Object(r.jsx)("span",{className:"mx-auto",children:e.projectIdentifier})}),Object(r.jsxs)("div",{className:"col-lg-6 col-md-4 col-8",children:[Object(r.jsx)("h3",{children:e.projectName}),Object(r.jsx)("p",{children:e.description})]}),Object(r.jsx)("div",{className:"col-md-4 d-none d-lg-block",children:Object(r.jsxs)("ul",{className:"list-group",children:[Object(r.jsx)(u.b,{to:"/projectBoard/".concat(e.projectIdentifier),children:Object(r.jsx)("li",{className:"list-group-item board",children:Object(r.jsx)("i",{className:"fa fa-flag-checkered pr-1",children:"Project Board "})})}),Object(r.jsx)(u.b,{to:"/updateProject/".concat(e.projectIdentifier),children:Object(r.jsx)("li",{className:"list-group-item update",children:Object(r.jsx)("i",{className:"fa fa-edit pr-1",children:"Update Project Info"})})}),Object(r.jsx)("li",{className:"list-group-item delete",onClick:this.onDeleteClick.bind(this,e.projectIdentifier),children:Object(r.jsx)("i",{className:"fa fa-minus-circle pr-1",children:"Delete Project"})})]})})]})})})}}]),a}(c.Component),D=Object(h.b)(null,{deleteProject:function(e){return function(){var t=Object(O.a)(m.a.mark((function t(a){return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!window.confirm("Are you sure?")){t.next=4;break}return t.next=3,f.a.delete("/api/project/".concat(e));case 3:a({type:N,payload:e});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}})(_),T=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.props.getProjects()}},{key:"render",value:function(){var e=this.props.project.projects;return Object(r.jsx)("div",{className:"projects",children:Object(r.jsx)("div",{className:"container",children:Object(r.jsx)("div",{className:"row",children:Object(r.jsxs)("div",{className:"col-md-12",children:[Object(r.jsx)("h1",{className:"display-4 text-center",children:"Projects"}),Object(r.jsx)("br",{}),Object(r.jsx)(p,{}),Object(r.jsx)("br",{}),Object(r.jsx)("hr",{}),e.map((function(e){return Object(r.jsx)(D,{project:e},e.id)}))]})})})})}}]),a}(c.Component),I=Object(h.b)((function(e){return{project:e.project}}),{getProjects:function(){return function(){var e=Object(O.a)(m.a.mark((function e(t){var a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.get("/api/project/all");case 2:a=e.sent,t({type:g,payload:a.data});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(T),E=function(e){e?f.a.defaults.headers.common.Authorization=e:delete f.a.defaults.headers.common.Authorization},R=a(27),A=function(){return function(e){localStorage.removeItem("jwtToken"),E(!1),e({type:P,payload:{}})}},B=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"logout",value:function(){this.props.logout(),window.location="http://"+window.location.host+"/"}},{key:"render",value:function(){var e,t=this.props.security,a=t.validToken,c=t.user,n=Object(r.jsxs)("div",{className:"collapse navbar-collapse",id:"mobile-nav",children:[Object(r.jsx)("ul",{className:"navbar-nav mr-auto",children:Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsx)(u.b,{to:"/dashboard",className:"nav-link",children:"Dashboard"})})}),Object(r.jsxs)("ul",{className:"navbar-nav ml-auto",children:[Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsxs)(u.b,{to:"/dashboard",className:"nav-link",children:[Object(r.jsx)("i",{className:"fas fa-user-circle mr-1"}),c.fullname]})}),Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsx)(u.b,{to:"/logout",className:"nav-link",onClick:this.logout.bind(this),children:"Logout"})})]})]}),s=Object(r.jsx)("div",{className:"collapse navbar-collapse",id:"mobile-nav",children:Object(r.jsxs)("ul",{className:"navbar-nav ml-auto",children:[Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsx)(u.b,{to:"/register",className:"nav-link",children:"Sign Up"})}),Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsx)(u.b,{to:"/login",className:"nav-link",children:"Login"})})]})});return e=a&&c?n:s,Object(r.jsx)("nav",{className:"navbar navbar-expand-sm navbar-dark bg-primary mb-4",children:Object(r.jsxs)("div",{className:"container",children:[Object(r.jsx)(u.b,{to:"/",className:"navbar-brand",children:"Personal Project Management Tool"}),Object(r.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#mobile-nav",children:Object(r.jsx)("span",{className:"navbar-toggler-icon"})}),e]})})}}]),a}(c.Component),U=Object(h.b)((function(e){return{security:e.security}}),{logout:A})(B),L=(a(75),a(11)),M=a(15),q=a(13),G=a(8),F=a.n(G),W=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).state={projectName:"",projectIdentifier:"",description:"",start_date:"",end_date:"",errors:{}},e.onChange=e.onChange.bind(Object(q.a)(e)),e.onSubmit=e.onSubmit.bind(Object(q.a)(e)),e}return Object(l.a)(a,[{key:"componentWillReceiveProps",value:function(e){e.errors&&this.setState({errors:e.errors})}},{key:"onChange",value:function(e){this.setState(Object(M.a)({},e.target.name,e.target.value))}},{key:"onSubmit",value:function(e){e.preventDefault();var t={projectName:this.state.projectName,projectIdentifier:this.state.projectIdentifier,description:this.state.description,start_date:this.state.start_date,end_date:this.state.end_date};this.props.createProject(t,this.props.history)}},{key:"render",value:function(){var e=this.state.errors;return Object(r.jsx)("div",{children:Object(r.jsx)("div",{className:"project",children:Object(r.jsx)("div",{className:"container",children:Object(r.jsx)("div",{className:"row",children:Object(r.jsxs)("div",{className:"col-md-8 m-auto",children:[Object(r.jsx)("h5",{className:"display-4 text-center",children:"Create Project form"}),Object(r.jsx)("hr",{}),Object(r.jsxs)("form",{onSubmit:this.onSubmit,children:[Object(r.jsxs)("div",{className:"form-group",children:[Object(r.jsx)("input",{type:"text",className:F()("form-control form-control-lg ",{"is-invalid":e.projectName}),placeholder:"Project Name",name:"projectName",value:this.state.projectName,onChange:this.onChange}),e.projectName&&Object(r.jsx)("div",{className:"invalid-feedback",children:e.projectName})]}),Object(r.jsxs)("div",{className:"form-group",children:[Object(r.jsx)("input",{type:"text",className:F()("form-control form-control-lg ",{"is-invalid":e.projectIdentifier}),placeholder:"Unique Project ID",name:"projectIdentifier",value:this.state.projectIdentifier,onChange:this.onChange}),e.projectIdentifier&&Object(r.jsx)("div",{className:"invalid-feedback",children:e.projectIdentifier})]}),Object(r.jsxs)("div",{className:"form-group",children:[Object(r.jsx)("textarea",{className:F()("form-control form-control-lg ",{"is-invalid":e.description}),placeholder:"Project Description",name:"description",value:this.state.description,onChange:this.onChange}),e.description&&Object(r.jsx)("div",{className:"invalid-feedback",children:e.description})]}),Object(r.jsx)("h6",{children:"Start Date"}),Object(r.jsx)("div",{className:"form-group",children:Object(r.jsx)("input",{type:"date",className:"form-control form-control-lg",name:"start_date",value:this.state.start_date,onChange:this.onChange})}),Object(r.jsx)("h6",{children:"Estimated End Date"}),Object(r.jsx)("div",{className:"form-group",children:Object(r.jsx)("input",{type:"date",className:"form-control form-control-lg",name:"end_date",value:this.state.end_date,onChange:this.onChange})}),Object(r.jsx)("input",{type:"submit",className:"btn btn-primary btn-block mt-4"})]})]})})})})})}}]),a}(c.Component),J=Object(h.b)((function(e){return{errors:e.errors}}),{createProject:S})(W),H=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).state={id:"",projectName:"",projectIdentifier:"",description:"",start_date:"",end_date:"",errors:{}},e.onChange=e.onChange.bind(Object(q.a)(e)),e.onSubmit=e.onSubmit.bind(Object(q.a)(e)),e}return Object(l.a)(a,[{key:"componentWillReceiveProps",value:function(e){e.errors&&this.setState({errors:e.errors});var t=e.project,a=t.id,r=t.projectName,c=t.projectIdentifier,n=t.description,s=t.start_date,i=t.end_date;this.setState({id:a,projectName:r,projectIdentifier:c,description:n,start_date:s,end_date:i})}},{key:"componentDidMount",value:function(){var e=this.props.match.params.id;this.props.getProject(e,this.history)}},{key:"onChange",value:function(e){this.setState(Object(M.a)({},e.target.name,e.target.value))}},{key:"onSubmit",value:function(e){e.preventDefault();var t={id:this.state.id,projectName:this.state.projectName,projectIdentifier:this.state.projectIdentifier,description:this.state.description,start_date:this.state.start_date,end_date:this.state.end_date};this.props.createProject(t,this.props.history)}},{key:"render",value:function(){var e=this.state.errors;return Object(r.jsx)("div",{children:Object(r.jsx)("div",{className:"project",children:Object(r.jsx)("div",{className:"container",children:Object(r.jsx)("div",{className:"row",children:Object(r.jsxs)("div",{className:"col-md-8 m-auto",children:[Object(r.jsx)("h5",{className:"display-4 text-center",children:"Update Project form"}),Object(r.jsx)("hr",{}),Object(r.jsxs)("form",{onSubmit:this.onSubmit,children:[Object(r.jsxs)("div",{className:"form-group",children:[Object(r.jsx)("input",{type:"text",className:F()("form-control form-control-lg ",{"is-invalid":e.projectName}),placeholder:"Project Name",name:"projectName",value:this.state.projectName,onChange:this.onChange}),e.projectName&&Object(r.jsx)("div",{className:"invalid-feedback",children:e.projectName})]}),Object(r.jsx)("div",{className:"form-group",children:Object(r.jsx)("input",{type:"text",className:"form-control form-control-lg ",placeholder:"Unique Project ID",name:"projectIdentifier",value:this.state.projectIdentifier,onChange:this.onChange,disabled:!0})}),Object(r.jsxs)("div",{className:"form-group",children:[Object(r.jsx)("textarea",{className:F()("form-control form-control-lg ",{"is-invalid":e.description}),placeholder:"Project Description",name:"description",value:this.state.description,onChange:this.onChange}),e.description&&Object(r.jsx)("div",{className:"invalid-feedback",children:e.description})]}),Object(r.jsx)("h6",{children:"Start Date"}),Object(r.jsx)("div",{className:"form-group",children:Object(r.jsx)("input",{type:"date",className:"form-control form-control-lg",name:"start_date",value:this.state.start_date,onChange:this.onChange})}),Object(r.jsx)("h6",{children:"Estimated End Date"}),Object(r.jsx)("div",{className:"form-group",children:Object(r.jsx)("input",{type:"date",className:"form-control form-control-lg",name:"end_date",value:this.state.end_date,onChange:this.onChange})}),Object(r.jsx)("input",{type:"submit",className:"btn btn-primary btn-block mt-4"})]})]})})})})})}}]),a}(c.Component),X=Object(h.b)((function(e){return{project:e.project.project,errors:e.errors}}),{getProject:function(e,t){return function(){var a=Object(O.a)(m.a.mark((function a(r){var c;return m.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,f.a.get("/api/project/".concat(e));case 3:c=a.sent,r({type:y,payload:c.data}),a.next=10;break;case 7:a.prev=7,a.t0=a.catch(0),t.push("/dashboard");case 10:case"end":return a.stop()}}),a,null,[[0,7]])})));return function(e){return a.apply(this,arguments)}}()},createProject:S})(H),K=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(){var e;Object(o.a)(this,a);for(var r=arguments.length,c=new Array(r),n=0;n<r;n++)c[n]=arguments[n];return(e=t.call.apply(t,[this].concat(c))).onDeleteClick=function(t,a){e.props.deleteProjectTask(t,a)},e}return Object(l.a)(a,[{key:"render",value:function(){var e,t,a=this.props.project_task;return 1===a.priority?(t="bg-danger text-light",e="HIGH"):2===a.priority?(t="bg-warning text-light",e="MEDIUM"):(t="bg-info text-light",e="LOW"),Object(r.jsxs)("div",{className:"card mb-1 bg-light",children:[Object(r.jsxs)("div",{className:"card-header text-primary ".concat(t),children:["ID: ",a.projectSequence," -- Priority: ","",e]}),Object(r.jsxs)("div",{className:"card-body bg-light",children:[Object(r.jsx)("h5",{className:"card-title",children:a.summary}),Object(r.jsx)("p",{className:"card-text text-truncate ",children:a.acceptanceCriteria}),Object(r.jsx)(u.b,{to:"/updateProjectTask/".concat(a.projectIdentifier,"/").concat(a.projectSequence),className:"btn btn-primary",children:"View / Update"}),Object(r.jsx)("button",{className:"btn btn-danger ml-4",onClick:this.onDeleteClick.bind(this,a.projectIdentifier,a.projectSequence),children:"Delete"})]})]})}}]),a}(c.Component),V=Object(h.b)(null,{deleteProjectTask:function(e,t){return function(){var a=Object(O.a)(m.a.mark((function a(r){return m.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(!window.confirm("Are you sure?")){a.next=4;break}return a.next=3,f.a.delete("/api/backlog/".concat(e,"/").concat(t));case 3:r({type:w,payload:t});case 4:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()}})(K),z=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){for(var e=this.props.project_tasks_prop.map((function(e){return Object(r.jsx)(V,{project_task:e},e.id)})),t=[],a=[],c=[],n=0;n<e.length;n++)"TO_DO"===e[n].props.project_task.status?t.push(e[n]):"DONE"===e[n].props.project_task.status?c.push(e[n]):a.push(e[n]);return Object(r.jsx)("div",{className:"container",children:Object(r.jsxs)("div",{className:"row",children:[Object(r.jsxs)("div",{className:"col-md-4",children:[Object(r.jsx)("div",{className:"card text-center mb-2",children:Object(r.jsx)("div",{className:"card-header bg-secondary text-white",children:Object(r.jsx)("h3",{children:"TO DO"})})}),t]}),Object(r.jsxs)("div",{className:"col-md-4",children:[Object(r.jsx)("div",{className:"card text-center mb-2",children:Object(r.jsx)("div",{className:"card-header bg-primary text-white",children:Object(r.jsx)("h3",{children:"In Progress"})})}),a]}),Object(r.jsxs)("div",{className:"col-md-4",children:[Object(r.jsx)("div",{className:"card text-center mb-2",children:Object(r.jsx)("div",{className:"card-header bg-success text-white",children:Object(r.jsx)("h3",{children:"Done"})})}),c]})]})})}}]),a}(c.Component),Q=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).state={errors:{}},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this.props.match.params.id;this.props.getBacklog(e)}},{key:"componentWillReceiveProps",value:function(e){e.errors&&this.setState({errors:e.errors})}},{key:"render",value:function(){var e,t=this.props.match.params.id,a=this.props.backlog.project_tasks;return e=function(e,t){return 0===t.length?e.projectNotFound?Object(r.jsx)("div",{className:"alert alert-danger text-center",role:"alert",children:e.projectNotFound}):e.projectIdentifier?Object(r.jsx)("div",{className:"alert alert-danger text-center",role:"alert",children:e.projectIdentifier}):Object(r.jsx)("div",{className:"alert alert-info text-center",role:"alert",children:"No Project Tasks on this board"}):Object(r.jsx)(z,{project_tasks_prop:t})}(this.state.errors,a),Object(r.jsxs)("div",{className:"container",children:[Object(r.jsx)(u.b,{to:"/addProjectTask/".concat(t),className:"btn btn-primary mb-3",children:Object(r.jsx)("i",{className:"fas fa-plus-circle",children:" Create Project Task"})}),Object(r.jsx)("br",{}),Object(r.jsx)("hr",{}),e]})}}]),a}(c.Component),Y=Object(h.b)((function(e){return{backlog:e.backlog,errors:e.errors}}),{getBacklog:function(e){return function(){var t=Object(O.a)(m.a.mark((function t(a){var r;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,f.a.get("/api/backlog/".concat(e));case 3:r=t.sent,a({type:k,payload:r.data}),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),a({type:x,payload:t.t0.response.data});case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()}})(Q),Z=a(22),$=a(43),ee={},te=a(12),ae={projects:[],project:{}},re={project_tasks:[],project_task:{}},ce={user:{},validToken:!1},ne=function(e){return!!e},se=Object(Z.c)({errors:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ee,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case x:return t.payload;default:return e}},project:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ae,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case g:return Object(te.a)(Object(te.a)({},e),{},{projects:t.payload});case y:return Object(te.a)(Object(te.a)({},e),{},{project:t.payload});case N:return Object(te.a)(Object(te.a)({},e),{},{projects:e.projects.filter((function(e){return e.projectIdentifier!==t.payload}))});default:return e}},backlog:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:re,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case k:return Object(te.a)(Object(te.a)({},e),{},{project_tasks:t.payload});case C:return Object(te.a)(Object(te.a)({},e),{},{project_task:t.payload});case w:return Object(te.a)(Object(te.a)({},e),{},{project_tasks:e.project_tasks.filter((function(e){return e.projectSequence!==t.payload}))});default:return e}},security:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ce,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case P:return Object(te.a)(Object(te.a)({},e),{},{validToken:ne(t.payload),user:t.payload});default:return e}}}),ie={},oe=[$.a],le=window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__(),de=window.navigator.userAgent.includes("Chrome")&&le?Object(Z.e)(se,ie,Object(Z.d)(Z.a.apply(void 0,oe),le)):Object(Z.e)(se,ie,Object(Z.d)(Z.a.apply(void 0,oe))),je=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(e){var r;Object(o.a)(this,a);var c=(r=t.call(this,e)).props.match.params.id;return r.state={summary:"",acceptanceCriteria:"",status:"",priority:0,dueDate:"",projectIdentifier:c,errors:{}},r.onChange=r.onChange.bind(Object(q.a)(r)),r.onSubmit=r.onSubmit.bind(Object(q.a)(r)),r}return Object(l.a)(a,[{key:"componentWillReceiveProps",value:function(e){e.errors&&this.setState({errors:e.errors})}},{key:"onChange",value:function(e){this.setState(Object(M.a)({},e.target.name,e.target.value))}},{key:"onSubmit",value:function(e){e.preventDefault();var t={summary:this.state.summary,acceptanceCriteria:this.state.acceptanceCriteria,status:this.state.status,priority:this.state.priority,dueDate:this.state.dueDate};this.props.addProjectTask(this.state.projectIdentifier,t,this.props.history)}},{key:"render",value:function(){var e=this.props.match.params.id,t=this.state.errors;return Object(r.jsx)("div",{children:Object(r.jsx)("div",{className:"add-PBI",children:Object(r.jsx)("div",{className:"container",children:Object(r.jsx)("div",{className:"row",children:Object(r.jsxs)("div",{className:"col-md-8 m-auto",children:[Object(r.jsx)(u.b,{to:"/projectBoard/".concat(e),className:"btn btn-light",children:"Back to Project Board"}),Object(r.jsx)("h4",{className:"display-4 text-center",children:"Add Project Task"}),Object(r.jsx)("p",{className:"lead text-center",children:"Project Name + Project Code"}),Object(r.jsxs)("form",{onSubmit:this.onSubmit,children:[Object(r.jsxs)("div",{className:"form-group",children:[Object(r.jsx)("input",{type:"text",className:F()("form-control form-control-lg ",{"is-invalid":t.summary}),name:"summary",placeholder:"Project Task summary",value:this.state.summary,onChange:this.onChange}),t.summary&&Object(r.jsx)("div",{className:"invalid-feedback",children:t.summary})]}),Object(r.jsxs)("div",{className:"form-group",children:[Object(r.jsx)("textarea",{className:F()("form-control form-control-lg ",{"is-invalid":t.acceptanceCriteria}),placeholder:"Acceptance Criteria",name:"acceptanceCriteria",value:this.state.acceptanceCriteria,onChange:this.onChange}),t.acceptanceCriteria&&Object(r.jsx)("div",{className:"invalid-feedback",children:t.acceptanceCriteria})]}),Object(r.jsx)("h6",{children:"Due Date"}),Object(r.jsxs)("div",{className:"form-group",children:[Object(r.jsx)("input",{type:"date",className:F()("form-control form-control-lg ",{"is-invalid":t.dueDate}),name:"dueDate",value:this.state.dueDate,onChange:this.onChange}),t.dueDate&&Object(r.jsx)("div",{className:"invalid-feedback",children:t.dueDate})]}),Object(r.jsxs)("div",{className:"form-group",children:[Object(r.jsxs)("select",{className:F()("form-control form-control-lg ",{"is-invalid":t.priority}),name:"priority",value:this.state.priority,onChange:this.onChange,children:[Object(r.jsx)("option",{value:0,children:"Select Priority"}),Object(r.jsx)("option",{value:1,children:"High"}),Object(r.jsx)("option",{value:2,children:"Medium"}),Object(r.jsx)("option",{value:3,children:"Low"})]}),t.priority&&Object(r.jsx)("div",{className:"invalid-feedback",children:t.priority})]}),Object(r.jsxs)("div",{className:"form-group",children:[Object(r.jsxs)("select",{className:F()("form-control form-control-lg ",{"is-invalid":t.status}),name:"status",value:this.state.status,onChange:this.onChange,children:[Object(r.jsx)("option",{value:"",children:"Select Status"}),Object(r.jsx)("option",{value:"TO_DO",children:"TO DO"}),Object(r.jsx)("option",{value:"IN_PROGRESS",children:"IN PROGRESS"}),Object(r.jsx)("option",{value:"DONE",children:"DONE"})]}),t.status&&Object(r.jsx)("div",{className:"invalid-feedback",children:t.status})]}),Object(r.jsx)("input",{type:"submit",className:"btn btn-primary btn-block mt-4"})]})]})})})})})}}]),a}(c.Component),ue=Object(h.b)((function(e){return{errors:e.errors}}),{addProjectTask:function(e,t,a){return function(){var r=Object(O.a)(m.a.mark((function r(c){return m.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,f.a.post("/api/backlog/".concat(e),t);case 3:a.push("/projectBoard/".concat(e)),c({type:x,payload:{}}),r.next=10;break;case 7:r.prev=7,r.t0=r.catch(0),c({type:x,payload:r.t0.response.data});case 10:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(e){return r.apply(this,arguments)}}()}})(je),pe=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).state={id:"",projectSequence:"",summary:"",acceptanceCriteria:"",status:"",priority:0,dueDate:"",projectIdentifier:"",create_At:"",errors:{}},e.onChange=e.onChange.bind(Object(q.a)(e)),e.onSubmit=e.onSubmit.bind(Object(q.a)(e)),e}return Object(l.a)(a,[{key:"componentWillReceiveProps",value:function(e){e.errors&&this.setState({errors:e.errors});var t=e.project_task,a=t.id,r=t.projectSequence,c=t.summary,n=t.acceptanceCriteria,s=t.status,i=t.priority,o=t.dueDate,l=t.projectIdentifier,d=t.create_At;this.setState({id:a,projectSequence:r,summary:c,acceptanceCriteria:n,status:s,priority:i,dueDate:o,projectIdentifier:l,create_At:d})}},{key:"componentDidMount",value:function(){var e=this.props.match.params,t=e.backlog_id,a=e.projectTask_id;this.props.getProjectTask(t,a,this.props.history)}},{key:"onChange",value:function(e){this.setState(Object(M.a)({},e.target.name,e.target.value))}},{key:"onSubmit",value:function(e){e.preventDefault();var t={id:this.state.id,projectSequence:this.state.projectSequence,summary:this.state.summary,acceptanceCriteria:this.state.acceptanceCriteria,status:this.state.status,priority:this.state.priority,dueDate:this.state.dueDate,projectIdentifier:this.state.projectIdentifier,create_At:this.state.create_At};this.props.updateProjectTask(this.state.projectIdentifier,this.state.projectSequence,t,this.props.history)}},{key:"render",value:function(){var e=this.state.errors;return Object(r.jsx)("div",{children:Object(r.jsx)("div",{className:"add-PBI",children:Object(r.jsx)("div",{className:"container",children:Object(r.jsx)("div",{className:"row",children:Object(r.jsxs)("div",{className:"col-md-8 m-auto",children:[Object(r.jsx)(u.b,{to:"/projectBoard/".concat(this.state.projectIdentifier),className:"btn btn-light",children:"Back to Project Board"}),Object(r.jsx)("h4",{className:"display-4 text-center",children:"Update Project Task"}),Object(r.jsx)("p",{className:"lead text-center",children:"Project Name + Project Code"}),Object(r.jsxs)("form",{onSubmit:this.onSubmit,children:[Object(r.jsxs)("div",{className:"form-group",children:[Object(r.jsx)("input",{type:"text",className:F()("form-control form-control-lg ",{"is-invalid":e.summary}),name:"summary",placeholder:"Project Task summary",value:this.state.summary,onChange:this.onChange}),e.summary&&Object(r.jsx)("div",{className:"invalid-feedback",children:e.summary})]}),Object(r.jsxs)("div",{className:"form-group",children:[Object(r.jsx)("textarea",{className:F()("form-control form-control-lg ",{"is-invalid":e.acceptanceCriteria}),placeholder:"Acceptance Criteria",name:"acceptanceCriteria",value:this.state.acceptanceCriteria,onChange:this.onChange}),e.acceptanceCriteria&&Object(r.jsx)("div",{className:"invalid-feedback",children:e.acceptanceCriteria})]}),Object(r.jsx)("h6",{children:"Due Date"}),Object(r.jsxs)("div",{className:"form-group",children:[Object(r.jsx)("input",{type:"date",className:F()("form-control form-control-lg ",{"is-invalid":e.dueDate}),name:"dueDate",value:this.state.dueDate,onChange:this.onChange}),e.dueDate&&Object(r.jsx)("div",{className:"invalid-feedback",children:e.dueDate})]}),Object(r.jsxs)("div",{className:"form-group",children:[Object(r.jsxs)("select",{className:F()("form-control form-control-lg ",{"is-invalid":e.priority}),name:"priority",value:this.state.priority,onChange:this.onChange,children:[Object(r.jsx)("option",{value:0,children:"Select Priority"}),Object(r.jsx)("option",{value:1,children:"High"}),Object(r.jsx)("option",{value:2,children:"Medium"}),Object(r.jsx)("option",{value:3,children:"Low"})]}),e.priority&&Object(r.jsx)("div",{className:"invalid-feedback",children:e.priority})]}),Object(r.jsxs)("div",{className:"form-group",children:[Object(r.jsxs)("select",{className:F()("form-control form-control-lg ",{"is-invalid":e.status}),name:"status",value:this.state.status,onChange:this.onChange,children:[Object(r.jsx)("option",{value:"",children:"Select Status"}),Object(r.jsx)("option",{value:"TO_DO",children:"TO DO"}),Object(r.jsx)("option",{value:"IN_PROGRESS",children:"IN PROGRESS"}),Object(r.jsx)("option",{value:"DONE",children:"DONE"})]}),e.status&&Object(r.jsx)("div",{className:"invalid-feedback",children:e.status})]}),Object(r.jsx)("input",{type:"submit",className:"btn btn-primary btn-block mt-4"})]})]})})})})})}}]),a}(c.Component),he=Object(h.b)((function(e){return{project_task:e.backlog.project_task,errors:e.errors}}),{getProjectTask:function(e,t,a){return function(){var r=Object(O.a)(m.a.mark((function r(c){var n;return m.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,f.a.get("/api/backlog/".concat(e,"/").concat(t));case 3:n=r.sent,c({type:C,payload:n.data}),r.next=10;break;case 7:r.prev=7,r.t0=r.catch(0),a.push("/dashboard");case 10:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(e){return r.apply(this,arguments)}}()},updateProjectTask:function(e,t,a,r){return function(){var c=Object(O.a)(m.a.mark((function c(n){return m.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.prev=0,c.next=3,f.a.patch("/api/backlog/".concat(e,"/").concat(t),a);case 3:r.push("/projectBoard/".concat(e)),n({type:x,payload:{}}),c.next=10;break;case 7:c.prev=7,c.t0=c.catch(0),n({type:x,payload:c.t0.response.data});case 10:case"end":return c.stop()}}),c,null,[[0,7]])})));return function(e){return c.apply(this,arguments)}}()}})(pe),be=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.props.security.validToken&&this.props.history.push("/dashboard")}},{key:"render",value:function(){return Object(r.jsx)("div",{className:"landing",children:Object(r.jsx)("div",{className:"light-overlay landing-inner text-dark",children:Object(r.jsx)("div",{className:"container",children:Object(r.jsx)("div",{className:"row",children:Object(r.jsxs)("div",{className:"col-md-12 text-center",children:[Object(r.jsx)("h1",{className:"display-3 mb-4",children:"Personal Project Management Tool"}),Object(r.jsx)("p",{className:"lead",children:"Create your account to join active projects or start your own"}),Object(r.jsx)("hr",{}),Object(r.jsx)(u.b,{to:"/register",className:"btn btn-lg btn-primary mr-2",children:"Sign Up"}),Object(r.jsx)(u.b,{to:"/login",className:"btn btn-lg btn-secondary mr-2",children:"Login"})]})})})})})}}]),a}(c.Component),me=Object(h.b)((function(e){return{security:e.security}}))(be),Oe=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).state={username:"",fullName:"",password:"",confirmPassword:"",errors:{}},e.onChange=e.onChange.bind(Object(q.a)(e)),e.onSubmit=e.onSubmit.bind(Object(q.a)(e)),e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.props.security.validToken&&this.props.history.push("/dashboard")}},{key:"componentWillReceiveProps",value:function(e){e.errors&&this.setState({errors:e.errors})}},{key:"onSubmit",value:function(e){e.preventDefault();var t={username:this.state.username,fullName:this.state.fullName,password:this.state.password,confirmPassword:this.state.confirmPassword};this.props.createNewUser(t,this.props.history)}},{key:"onChange",value:function(e){this.setState(Object(M.a)({},e.target.name,e.target.value))}},{key:"render",value:function(){var e=this.state.errors;return Object(r.jsx)("div",{className:"register",children:Object(r.jsx)("div",{className:"container",children:Object(r.jsx)("div",{className:"row",children:Object(r.jsxs)("div",{className:"col-md-8 m-auto",children:[Object(r.jsx)("h1",{className:"display-4 text-center",children:"Sign Up"}),Object(r.jsx)("p",{className:"lead text-center",children:"Create your Account"}),Object(r.jsxs)("form",{onSubmit:this.onSubmit,children:[Object(r.jsxs)("div",{className:"form-group",children:[Object(r.jsx)("input",{type:"text",className:F()("form-control form-control-lg",{"is-invalid":e.fullName}),placeholder:"Full Name",name:"fullName",value:this.state.fullName,onChange:this.onChange}),e.fullName&&Object(r.jsx)("div",{className:"invalid-feedback",children:e.fullName})]}),Object(r.jsxs)("div",{className:"form-group",children:[Object(r.jsx)("input",{type:"text",className:F()("form-control form-control-lg",{"is-invalid":e.username}),placeholder:"Email Address (Username)",name:"username",value:this.state.username,onChange:this.onChange}),e.username&&Object(r.jsx)("div",{className:"invalid-feedback",children:e.username})]}),Object(r.jsxs)("div",{className:"form-group",children:[Object(r.jsx)("input",{type:"password",className:F()("form-control form-control-lg",{"is-invalid":e.password}),placeholder:"Password",name:"password",value:this.state.password,onChange:this.onChange}),e.password&&Object(r.jsx)("div",{className:"invalid-feedback",children:e.password})]}),Object(r.jsxs)("div",{className:"form-group",children:[Object(r.jsx)("input",{type:"password",className:F()("form-control form-control-lg",{"is-invalid":e.confirmPassword}),placeholder:"Confirm Password",name:"confirmPassword",value:this.state.confirmPassword,onChange:this.onChange}),e.confirmPassword&&Object(r.jsx)("div",{className:"invalid-feedback",children:e.confirmPassword})]}),Object(r.jsx)("input",{type:"submit",className:"btn btn-info btn-block mt-4"})]})]})})})})}}]),a}(c.Component),ve=Object(h.b)((function(e){return{errors:e.errors,security:e.security}}),{createNewUser:function(e,t){return function(){var a=Object(O.a)(m.a.mark((function a(r){return m.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,f.a.post("/api/users/register",e);case 3:t.push("/login"),r({type:x,payload:{}}),a.next=10;break;case 7:a.prev=7,a.t0=a.catch(0),r({type:x,payload:a.t0.response.data});case 10:case"end":return a.stop()}}),a,null,[[0,7]])})));return function(e){return a.apply(this,arguments)}}()}})(Oe),fe=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).state={username:"",password:"",errors:{}},e.onChange=e.onChange.bind(Object(q.a)(e)),e.onSubmit=e.onSubmit.bind(Object(q.a)(e)),e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.props.security.validToken&&this.props.history.push("/dashboard")}},{key:"componentWillReceiveProps",value:function(e){e.security.validToken&&this.props.history.push("/dashboard"),e.errors&&this.setState({errors:e.errors})}},{key:"onChange",value:function(e){this.setState(Object(M.a)({},e.target.name,e.target.value))}},{key:"onSubmit",value:function(e){e.preventDefault();var t={username:this.state.username,password:this.state.password};this.props.login(t)}},{key:"render",value:function(){var e=this.state.errors;return Object(r.jsx)("div",{className:"login",children:Object(r.jsx)("div",{className:"container",children:Object(r.jsx)("div",{className:"row",children:Object(r.jsxs)("div",{className:"col-md-8 m-auto",children:[Object(r.jsx)("h1",{className:"display-4 text-center",children:"Log In"}),Object(r.jsxs)("form",{onSubmit:this.onSubmit,children:[Object(r.jsxs)("div",{className:"form-group",children:[Object(r.jsx)("input",{type:"text",className:F()("form-control form-control-lg",{"is-invalid":e.username}),placeholder:"Email Address",name:"username",value:this.state.username,onChange:this.onChange}),e.username&&Object(r.jsx)("div",{className:"invalid-feedback",children:e.username})]}),Object(r.jsxs)("div",{className:"form-group",children:[Object(r.jsx)("input",{type:"password",className:F()("form-control form-control-lg",{"is-invalid":e.password}),placeholder:"Password",name:"password",value:this.state.password,onChange:this.onChange}),e.password&&Object(r.jsx)("div",{className:"invalid-feedback",children:e.password})]}),Object(r.jsx)("input",{type:"submit",className:"btn btn-info btn-block mt-4"})]})]})})})})}}]),a}(c.Component),xe=Object(h.b)((function(e){return{security:e.security,errors:e.errors}}),{login:function(e){return function(){var t=Object(O.a)(m.a.mark((function t(a){var r,c,n;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,f.a.post("/api/users/login",e);case 3:r=t.sent,c=r.data.token,localStorage.setItem("jwtToken",c),E(c),n=Object(R.a)(c),a({type:P,payload:n}),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),a({type:x,payload:t.t0.response.data});case 14:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(e){return t.apply(this,arguments)}}()}})(fe),ge=a(44),ye=Object(h.b)((function(e){return{security:e.security}}))((function(e){var t=e.component,a=e.security,c=Object(ge.a)(e,["component","security"]);return Object(r.jsx)(L.b,Object(te.a)(Object(te.a)({},c),{},{render:function(e){return!0===a.validToken?Object(r.jsx)(t,Object(te.a)({},e)):Object(r.jsx)(L.a,{to:"/login"})}}))})),Ne=localStorage.jwtToken;if(Ne){E(Ne);var ke=Object(R.a)(Ne);de.dispatch({type:P,payload:ke});var Ce=Date.now()/1e3;ke.exp<Ce&&(de.dispatch(A()),window.location="http://"+window.location.host+"/")}var we=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(r.jsx)(h.a,{store:de,children:Object(r.jsx)(u.a,{children:Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)(U,{}),Object(r.jsx)(L.b,{exact:!0,path:"/",component:me}),Object(r.jsx)(L.b,{exact:!0,path:"/login",component:xe}),Object(r.jsx)(L.b,{exact:!0,path:"/register",component:ve}),Object(r.jsxs)(L.d,{children:[Object(r.jsx)(ye,{exact:!0,path:"/dashboard",component:I}),Object(r.jsx)(ye,{exact:!0,path:"/addProject",component:J}),Object(r.jsx)(ye,{exact:!0,path:"/updateProject/:id",component:X}),Object(r.jsx)(ye,{exact:!0,path:"/projectBoard/:id",component:Y}),Object(r.jsx)(ye,{exact:!0,path:"/addProjectTask/:id",component:ue}),Object(r.jsx)(ye,{exact:!0,path:"/updateProjectTask/:backlog_id/:projectTask_id",component:he})]})]})})})}}]),a}(c.Component),Pe=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,77)).then((function(t){var a=t.getCLS,r=t.getFID,c=t.getFCP,n=t.getLCP,s=t.getTTFB;a(e),r(e),c(e),n(e),s(e)}))};i.a.render(Object(r.jsx)(n.a.StrictMode,{children:Object(r.jsx)(we,{})}),document.getElementById("root")),Pe()}},[[76,1,2]]]);
//# sourceMappingURL=main.eb983860.chunk.js.map