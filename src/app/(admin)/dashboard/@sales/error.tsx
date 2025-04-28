import React from 'react';

export interface ErrorComponentProps {}

export default function ErrorComponent({}: ErrorComponentProps) {
  return (
    <div>Unexpected error inside slot sales</div>
  );
}