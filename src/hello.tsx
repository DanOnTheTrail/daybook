import React from 'react';

interface DateLineProps {
  date: Date
}

function Hello({ date }: DateLineProps) : JSX.Element {
  const d = new Date(date);
  return (
    <>
    <h2>Hello from React!</h2>
    <hr />
    Today is {d.toDateString()}
    </>
  );
}

export { Hello };