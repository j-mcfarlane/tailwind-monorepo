# Monorepo

## Install / Setup

Step 1: pnpm i
Step 2: pnpm run build:packages
Step 3: cd domains/platform && pnpm run dev

visit http://localhost:3000 and observe "Platform" Landing page

## Problem

We are building out a H1 component inside of packages/typography and we consume this in LandingContainer.tsx this way

 <H1 color="primary" size="level1" weight="thin">Platform</H1>

As you can see there are some variants. If you change the weight variant you can see the component updating correctly. If you change the size to other levels you can see the component updating correctly in size. The color is never rendered correctly and the classnames `text-primary`, `text-secondary`, `text-inherit` are nowhere to be found. If you remove the size variant completely from the `cn()` function inside `H1.tsx` you can see the color work however it doesnt seem to change correctly when using the var names "primary" "secondary" "inherit".

## Goal

Have a component where I can add whatever variants I want and it will render the correct classnames

## Notes

All styles are located in packages/styling/app.css
