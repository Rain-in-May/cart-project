package org.KwonEunbi.api.common.utl;

public enum Path {
    DEFAULT_PROFILE;
    @Override
    public String toString() {
        String result = "";
        switch(this) {
            case DEFAULT_PROFILE:
                result = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiuZGp08DDSD0P3PMfKSbbPu2nVmJdH74gHg&usqp=CAU";
        }
        return result;
    }
}
