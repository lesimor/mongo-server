const Theme = require('talk/theme/model');

exports.create = async (ctx) => {
    // request body 에서 값들을 추출합니다
    const {
        question
    } = ctx.request.body;
    // Book 인스턴스를 생성합니다
    const theme = new Theme({
        question
    });

    // 만들어진 Book 인스턴스를, 이렇게 수정 할 수도 있습니다.
    // theme.sentence = sentence;

    //.save() 함수를 실행하면 이 때 데이터베이스에 실제로 데이터를 작성합니다.
    // Promise 를 반환합니다.
    try {
        await theme.save();
    } catch(e) {
        // HTTP 상태 500 와 Internal Error 라는 메시지를 반환하고,
        // 에러를 기록합니다.
        return ctx.throw(500, e);
    }

    // 저장한 결과를 반환합니다.
    ctx.body = theme;
};

exports.list = async (ctx) => {
    // 변수를 미리 만들어줍니다.
    // (let 이나 const 는 scope 가 블록단위이기 때문에, try 바깥에 선언을 해줍니다)

    let themes;

    try {
        // 데이터를 조회합니다.
        // .exec() 를 뒤에 붙여줘야 실제로 데이터베이스에 요청이 됩니다.
        // 반환값은 Promise 이므로 await 을 사용 할 수 있습니다.
        themes = await Theme.find().exec();
    } catch (e) {
        return ctx.throw(500, e);
    }

    ctx.body = {results: themes};
};