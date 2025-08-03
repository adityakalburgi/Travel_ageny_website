# Search Bar Component Design Documentation

## Overview

The search bar component is designed with a modern, glassmorphic UI that sits prominently on the travel website's hero section. It provides users with an intuitive way to search for travel destinations by location, distance, and group size.

## Visual Design

![Search Bar Design](https://i.postimg.cc/DyTCmq0D/Screenshot-2025-07-28-140140.png)

The design features:
- Semi-transparent glass container with blur effect
- Clean white input fields with rounded edges
- Color-coded icons for visual guidance
- Vibrant blue gradient search button
- Responsive design that adapts to different screen sizes

## Component Structure

The search bar is structured as a form with three input groups and a submit button:
1. **Destination Field**: Uses a map marker icon for location input
2. **Distance Field**: Uses a ruler icon for distance in kilometers
3. **Max People Field**: Uses a user group icon for number of travelers
4. **Search Button**: Features a search icon and gradient background

## Styling Details

### Container
- Glassmorphic effect with backdrop-filter blur
- Semi-transparent white background (20% opacity)
- Subtle border and shadow for depth
- 50px border radius for modern, rounded look

### Input Fields
- Pure white background for contrast against the semi-transparent container
- No visible borders, using padding and background color instead
- Left-aligned colorful icons (green) for visual hierarchy
- Rounded design matching the container's aesthetic

### Search Button
- Blue gradient background (light to dark) for visual emphasis
- White text and icon for optimal contrast
- Subtle shadow for depth
- Hover animation that lifts the button slightly
- Rounded edges matching the input fields

## Responsive Behavior

The search bar adapts to different screen sizes:
- On desktop: Horizontal layout with fields side by side
- On tablets: 2x2 grid layout with two fields per row
- On mobile: Stacked vertical layout with full-width fields

## Usage Guidelines

- Place the search bar component on hero sections with image backgrounds
- Ensure sufficient contrast between the background image and the search bar
- Maintain the visual hierarchy with the button being the most prominent element
- Use consistent placeholder text that guides user input

## Implementation Notes

The component uses:
- React for the component structure and state management
- CSS for styling (no external UI libraries for the core design)
- React Icons for consistent iconography
- Form validation for number inputs
