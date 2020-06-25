import moduleA from 'module-a'
import {greeting as moduleMultiGreeting, CONSTANT as MODULE_MULTI_CONSTANT} from 'module-multi'
import {greeting as hybridMultiGreeting, CONSTANT as HYBRID_MULTI_CONSTANT} from 'hybrid-multi'

console.log(`module-a says "${moduleA('you')}"`)
console.log(`module-multi.greeting says "${moduleMultiGreeting('you')}"`)
console.log(`module-multi.CONSTANT is "${MODULE_MULTI_CONSTANT}"`)
console.log(`hybrid-multi.greeting says "${hybridMultiGreeting('you')}"`)
console.log(`hybrid-multi.CONSTANT is "${HYBRID_MULTI_CONSTANT}"`)
