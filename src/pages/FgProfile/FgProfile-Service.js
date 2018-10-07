import {MOCKED_MEMBER_DARIA_with_BANNER_no_AVATAR} from "../../test/MockedTypes";
import {FgMember} from "../../types/FgMember";

//Add backed service calls for FgProfile here.

export class FgProfileService {

    async getMemberWithId(id) : FgMember {
        return MOCKED_MEMBER_DARIA_with_BANNER_no_AVATAR;
    }
}