package org.KwonEunbi.api.user.domain;

import java.util.List;

import io.swagger.annotations.ApiModelProperty;
import lombok.Data;
@Data
public class UserResponseDTO {
    @ApiModelProperty(position = 0)
    private long userNum;
    @ApiModelProperty(position = 1)
    private String username;
    @ApiModelProperty(position = 2)
    private String email;
    @ApiModelProperty(position = 3)
    List<Role> roles;
}