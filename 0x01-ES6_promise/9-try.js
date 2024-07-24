export default function guardrail(mathFunction) {
  const queue = [];
  try {
    queue.push(...[mathFunction(), 'Guardrail was processed']);
  } catch (error) {
    const [errMsg] = error.toString().split('\n');
    queue.push(...[errMsg, 'Guardrail was processed']);
  }

  return queue;
}
