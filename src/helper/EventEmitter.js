import { EventEmitter as Emitter } from 'events'
const emitter = new Emitter();
class EventEmitter {
    static emit(name, data = {}) {
        emitter.emit(name, data)
    }
    static on(name, cb) {
        emitter.on(name, cb)
    }
    static remove(name, cb) {
        emitter.removeEventListener(name, cb)
    }
    static getEventEmitter() {
        return emitter;
    }
}
export default EventEmitter;