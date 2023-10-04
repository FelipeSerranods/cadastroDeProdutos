import{s as e}from"../vaadin-dev-tools.js";import{labelProperties as i,helperTextProperties as m,errorMessageProperties as d}from"./vaadin-text-field-e82c445d.js";import{hostElement as a,checkboxElement as t,checkedCheckboxElement as c,checkmarkElement as l,labelElement as p}from"./vaadin-checkbox-13797fc9.js";import"construct-style-sheets-polyfill";import"lit";import"lit/decorators.js";import"lit/directives/class-map.js";import"lit/static-html.js";const C={tagName:"vaadin-checkbox-group",displayName:"CheckboxGroup",elements:[{selector:"vaadin-checkbox-group",displayName:"Group",properties:[e.backgroundColor,e.borderColor,e.borderWidth,e.borderRadius,e.padding]},{selector:"vaadin-checkbox-group::part(label)",displayName:"Label",properties:i},{selector:"vaadin-checkbox-group::part(helper-text)",displayName:"Helper text",properties:m},{selector:"vaadin-checkbox-group::part(error-message)",displayName:"Error message",properties:d},{...a,selector:`vaadin-checkbox-group ${a.selector}`,displayName:"Checkboxes"},{...t,selector:`vaadin-checkbox-group ${t.selector}`,displayName:"Checkmark boxes"},{...c,selector:`vaadin-checkbox-group ${c.selector}`,displayName:"Checkmark boxes (when checked)",stateElementSelector:"vaadin-checkbox-group vaadin-checkbox"},{...l,selector:`vaadin-checkbox-group ${l.selector}`,displayName:"Checkmarks"},{...p,selector:`vaadin-checkbox-group ${p.selector}`,displayName:"Checkbox labels"}],setupElement(s){const r=document.createElement("vaadin-checkbox"),o=document.createElement("label");o.textContent="Some label",o.setAttribute("slot","label"),r.append(o),s.append(r)}};export{C as default};
