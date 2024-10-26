import type { PrimeVuePTOptions } from 'primevue/config';

const button: PrimeVuePTOptions['button'] = {
  root: ({ props }) => ({
    class: [
      // sizes and spacing
      'px-3 py-2',
      // shapes
      'rounded',

      // Primary button
      ({
        'text-slate-100': !props.link && props.severity === null && !props.text && !props.outlined && !props.plain,
        'bg-slate-800': !props.link && props.severity === null && !props.text && !props.outlined && !props.plain,
        'border border-primary': !props.link && props.severity === null && !props.text && !props.outlined && !props.plain
      }),
      // Primary Text Button
      ({ 'text-primary': props.text && props.severity === null && !props.plain }),
      // Primary Outlined Button
      ({ 'text-primary border border-primary': props.outlined && props.severity === null && !props.plain }),
    ]
  }),
}

export { button }
