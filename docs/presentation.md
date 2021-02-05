title: React Hooks
subtitle:
class: animation-fade
layout: true

<!-- This slide will serve as the base layout for all your slides -->

.bottom-bar[
{{title}}
]

---

class: impact

# {{title}}

## {{subtitle}}

.title-oli[
Oliver Sturm &bull; @olivers[@fosstodon.org] &bull; oliver@oliversturm.com
]

.title-logo[
<img src="template/devexpress.png" id="devexpress" alt="DevExpress">
]

---

## Oliver Sturm

- Training Director at DevExpress
- Consultant, trainer, author, software architect and developer for 30 years

- Contact: oliver@oliversturm.com

---

## Agenda

- Hooks vs HOCs - what's the point?
  - (Note the amazing wordplay in the previous bullet)
- Standard hooks
- Custom hooks
- Hooks in 3rd party libraries

---

## What's the point of React Hooks?

- React has a functional structure with a side-effect free rendering mechanism
- Preference for functional component implementation
  - Class-based components still remain available!
- HOCs always supported for modularization
- Complex class and HOC structures end up with deep nesting
- Hooks: functional state management based on closures
- Popular by now in other JS-based environments

---

## The Hook Rules

```js
const MyComponent = () => {
  // Only use hook calls at the top level (that's rule 1)
  // of React functions (that's rule 2).
  // Note that "React functions" include custom hooks.

  const [val, setVal] = useState();

  return <div>Val is {val}</div>;
};
```

---

class: columns-ul

## Fragen

- Cloud - Kostenkontrolle - wie weiss man, was die eigene Anwendung kostet?
- Hochverfuegbarkeit notwendig - kann man "hybrid" oder lokal arbeiten, wenn die Cloud unzugaenglich ist? Docker - Registry lokal?
- On Premise-System in die Cloud migrieren, moeglichst ohne Aenderungen, was sind die Stolpersteine?
- GraphQL - wo gehoert das ins Datenzugriffssystem? Im Vergleich mit OData?
- Daten transferieren zwischen lokal und Cloud im Hybridsetup? Datenbankinhalte
- Beispiel Consul - Azure-Service oder separater Container - SaaS oder separates Deployment?

---

## Vor COVID - Eingeschränkter Remotezugriff

.svg-light-width-padding[![](pre-covid-remote-access-org.png)]

---

## Vor COVID - Eingeschränkte Remote-Funktionalität

.svg-light-100[![](pre-covid-remote-access-erp-modules.png)]

---

## Fernzugriff auf eine Datenbank

.svg-light-100[![](database-remote-access-through-vpn.png)]

---

## Fernzugriff mit Remote Desktop

.svg-light-100[![](remote-desktop-access.png)]

---

## Einfache Web-Anwendung

.svg-light-100[![](simple-web-application.png)]

---

## (Micro-?) Services

.svg-light-100[![](microservices-based-application.png)]

---

## Dienststruktur - Micro oder Größer

.svg-light[![](microservices-logical.svg)]

---

## CQRS

.svg-light[![](cqrs.svg)]

---

## CQRS mit Event Sourcing

.svg-light[![](cqrs-es.svg)]

---

## GraphQL Basics

.svg-light[![](graphql-basics.svg)]

---

## GraphQL Endpoint in Readmodel

.svg-light[![](graphql-endpoint-in-read-model.svg)]

---

## GraphQL - Frontend Service

.svg-light[![](frontend-graphql-service.svg)]

---

## Hypervisors

.svg-light-width[![](hypervisors.svg)]

---

## Container und VMs

.svg-light[![](containers-and-vms.svg)]

---

## CAP Theorem

.svg-light[![](cap-theorem.svg)]

---

## JavaScript vs TypeScript

.svg-light[![](static-types.svg)]

---

## Sources

- This presentation:

  - https://oliversturm.github.io/developers-and-architects/basta-2020
  - PDF download: <br>https://oliversturm.github.io/developers-and-architects/basta-2020/slides.pdf

---

class: impact

# Thank You

Please feel free to contact me about the content anytime.

.title-oli[
Oliver Sturm &bull; @olivers[@fosstodon.org] &bull; oliver@oliversturm.com
]

.title-logo[
<img src="template/devexpress.png" id="devexpress" alt="DevExpress">
]
