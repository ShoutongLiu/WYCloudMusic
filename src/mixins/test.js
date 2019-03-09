import wepy from 'wepy'

export default class testMixin extends wepy.mixin {
    data = {
        mixin: 'This is mixin data.'
    }

    onLoad() {
        console.log(this.data.mixin)
    }

}
